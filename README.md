# FAST Tool Community :: Asistente de Análisis de Sistemas 🚀

FAST Tool Community 1.0 es la edición comunitaria y educativa de
FAST Tool, una aplicación de escritorio para guiar el análisis,
modelado y documentación de sistemas de información.

Esta versión se distribuye bajo la licencia
[GNU Affero General Public License v3.0](LICENSE).

El desarrollo de futuras funciones profesionales y comerciales se
realizará en una línea independiente denominada FAST Tool Pro.

> FAST Tool Community está orientado a estudiantes, profesores,
> analistas de sistemas, desarrolladores y consultores independientes.

El desarrollo de nuevas funciones comerciales se realizará
en una línea independiente llamada FAST Tool Pro.

FAST Tool ayuda a organizar un proyecto de análisis de sistemas
mediante un flujo guiado basado en la metodología FAST
(Framework for the Application of Systems Thinking), asociada a
Whitten, Bentley y Barlow.

Permite gestionar proyectos, fases, entidades, atributos, procesos,
flujos de datos, puestos de trabajo, cronogramas, diagramas y
diccionarios de datos desde una aplicación local.


**FAST Desktop Tool** es una aplicación de escritorio (stand-alone) de código abierto, diseñada para guiar a estudiantes, analistas y desarrolladores paso a paso en la aplicación de la metodología **FAST** (Framework for the Application of Systems Thinking) propuesta por Whitten, Bentley y Barlow.

El objetivo es automatizar la tediosa tarea de documentación, generar diagramas (ERD, DFD, DCP) de forma automática y garantizar que los proyectos de software sigan un estándar de calidad académico y profesional, **sin necesidad de conexión a internet ni servidores costosos**.

## ✨ Características Principales

- **Aplicación de escritorio local:** funciona como una aplicación
  independiente para Windows, macOS y Linux.
- **Datos locales:** la información se almacena localmente mediante
  SQLite.
- **Asistente guiado:** organiza el trabajo en fases de inspección,
  estudio y definición.
- **Modelado de sistemas:** permite registrar entidades, atributos,
  procesos, flujos de datos y puestos de trabajo.
- **Diagramas automáticos:** genera modelos DER/ERD, DFD y DCP
  mediante Mermaid.
- **Diccionario de datos:** genera documentación en Markdown y PDF.
- **Multi-proyecto:** permite trabajar con diferentes proyectos y
  clientes desde una misma instalación.
- **Sin dependencia de servicios cloud:** la edición Community no
  requiere una cuenta ni un servidor remoto para funcionar.



## 🛠️ Stack Tecnológico

Este proyecto está construido con herramientas modernas y 100% Open Source:

## Stack tecnológico

- **Escritorio:** Electron
- **Frontend:** React 19, Vite y Tailwind CSS
- **Servidor local:** Node.js y Express
- **Base de datos:** SQLite mediante better-sqlite3
- **Diagramación:** Mermaid.js
- **Lenguaje:** TypeScript



## 🚀 ¿Cómo empezar? 
## Instalación para desarrolladores

### Requisitos

- Node.js 22 LTS recomendado
- npm
- Git

### Clonar el repositorio

```bash
git clone https://github.com/jcmguedez/FAST-Desktop-Tools.git
cd FAST-Desktop-Tools

npm install --legacy-peer-deps

Instalar dependencias
Bash
npm install --legacy-peer-deps
Ejecutar comprobación de tipos
Bash
npm run lint
Ejecutar la aplicación en desarrollo
Bash
npm run electron:dev
Compilar la aplicación
Bash
npm run build:app
Generar el instalador de Windows
Este comando debe ejecutarse en Windows:
powershell
npm run build:win
El instalador se generará dentro de la carpeta release/.
Plain Text

## Licencia

FAST Tool Community se distribuye bajo la GNU Affero General Public
License v3.0. Consulta el archivo [LICENSE](LICENSE).

Las dependencias de terceros conservan sus propias licencias y
avisos correspondientes.

## Estado del proyecto

FAST Tool Community 1.0 representa la edición abierta y educativa
del proyecto. Las futuras funciones profesionales, comerciales,
cloud e inteligencia artificial podrán desarrollarse como productos
o servicios independientes bajo FAST Tool Pro.

FAST Tool Community
Y que FAST Desktop Tool quede solamente como nombre técnico o nombre histórico. Si el instalador todavía muestra FAST Desktop Tool, también convendría actualizar productName en package.json a:

Producto actual: FAST Tool Community
Producto futuro: FAST Tool Pro
Nombre técnico anterior: FAST Desktop Tool

