const { app, BrowserWindow } = require('electron');
const path = require('path');
const net = require('net');

let mainWindow = null;
let serverProcess = null;

// ─── UTILIDAD: esperar a que un puerto esté abierto ─────────────────────────
function waitForPort(port, retries = 30, delay = 500) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const tryConnect = () => {
      const socket = new net.Socket();
      socket.setTimeout(400);
      socket.on('connect', () => {
        socket.destroy();
        resolve();
      });
      socket.on('error', () => {
        socket.destroy();
        if (++attempts >= retries) {
          reject(new Error(`Puerto ${port} no disponible tras ${retries} intentos`));
        } else {
          setTimeout(tryConnect, delay);
        }
      });
      socket.on('timeout', () => {
        socket.destroy();
        if (++attempts >= retries) {
          reject(new Error(`Puerto ${port} timeout tras ${retries} intentos`));
        } else {
          setTimeout(tryConnect, delay);
        }
      });
      socket.connect(port, '127.0.0.1');
    };
    tryConnect();
  });
}

// ─── INICIAR SERVIDOR EXPRESS ────────────────────────────────────────────────
function startServer() {
  // Establecemos la ruta de userData ANTES de requerir el servidor
  process.env.ELECTRON_USER_DATA = app.getPath('userData');

  // En producción, electron-builder copia server.js a resources/app/server.js
  // (ver extraResources en package.json). app.getAppPath() apunta a app.asar,
  // así que subimos un nivel para llegar a /resources y luego entramos en /app.
  let serverPath;
  if (app.isPackaged) {
    // Ruta correcta dentro del paquete NSIS/win-unpacked:
    //   resources/app/server.js   (extraResources lo pone aquí)
    serverPath = path.join(process.resourcesPath, 'app', 'server.js');
  } else {
    serverPath = path.join(__dirname, '..', 'server.js');
  }

  console.log('📂 Cargando servidor desde:', serverPath);

  try {
    require(serverPath);
    console.log('✅ Servidor Express iniciado en el puerto 3000');
  } catch (err) {
    console.error('❌ Error al iniciar el servidor Express:', err);
    // Mostramos la ventana igualmente para poder ver DevTools
  }
}

// ─── CREAR VENTANA PRINCIPAL ─────────────────────────────────────────────────
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'FAST Desktop Tool',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Siempre abrimos DevTools en modo empaquetado para depurar (quitar en release final)
  if (app.isPackaged) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  const url = app.isPackaged
    ? 'http://localhost:3000'
    : 'http://localhost:5173';

  console.log('🌐 Cargando URL:', url);
  mainWindow.loadURL(url);

  mainWindow.webContents.on('did-fail-load', (_event, code, desc, url) => {
    console.error(`❌ did-fail-load: [${code}] ${desc} → ${url}`);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// ─── FLUJO PRINCIPAL ─────────────────────────────────────────────────────────
app.whenReady().then(async () => {
  startServer();

  try {
    // Esperamos a que Express esté listo (máx. 15 s)
    await waitForPort(3000);
    console.log('✅ Puerto 3000 disponible, abriendo ventana...');
  } catch (err) {
    console.error('⚠️  No se pudo confirmar el puerto 3000:', err.message);
    // Abrimos de todas formas para ver el error en DevTools
  }

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});