# Jardín Infantil Arcoíris Kids

Demo comercial completa creada con React, Vite, Tailwind CSS y JavaScript.

## Cómo instalar y ejecutar

```bash
npm install
npm run dev
```

En Windows PowerShell, si `npm` queda bloqueado por la política de ejecución, usa:

```bash
npm.cmd install
npm.cmd run dev
```

Luego abre `http://127.0.0.1:5173/`.

## Archivos principales

- `index.html`: entrada HTML de Vite.
- `src/main.jsx`: montaje de React.
- `src/App.jsx`: toda la demo, secciones, formulario, WhatsApp y panel admin.
- `src/index.css`: estilos globales, fuentes, helpers de Tailwind y animaciones.
- `tailwind.config.js`: paleta, tipografías y sombras del diseño.
- `package.json`: scripts y dependencias.

## Personalización rápida

Edita el objeto `siteData` en `src/App.jsx` para cambiar nombre, teléfono, WhatsApp, correo, dirección, horarios e imágenes. Las secciones `programs`, `activities` y `testimonials` también están en el mismo archivo para facilitar cambios comerciales rápidos.

## Funcionalidad demo

El formulario valida campos obligatorios, muestra éxito y guarda solicitudes en `localStorage`. El panel se abre desde el footer en `Admin Demo` o directamente en:

```text
http://127.0.0.1:5173/#admin-demo
```
