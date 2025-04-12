# 🖍️ UUP Dump: Numeración

Este script de Tampermonkey agrega numeración a los archivos listados en la página de [UUP Dump](https://uupdump.net) y permite copiar el nombre del archivo al portapapeles con un solo clic. Ideal para usuarios que necesitan descargar múltiples archivos y no quieren perder tiempo buscando y copiando los nombres manualmente.

## ✨ Características

- **Numeración automática**: Cada archivo tiene un número secuencial al lado del nombre.
- **Copiar al portapapeles**: Un botón que permite copiar el nombre del archivo con un solo clic.
- **Interfaz sencilla**: No modifica el diseño original de la página, solo añade funcionalidades.
  
## 🚀 Instalación

1. Instala la extensión **[Tampermonkey](https://www.tampermonkey.net/)** en tu navegador (compatible con Chrome, Firefox, Edge, y otros).
2. Abre Tampermonkey y selecciona la opción **"Crear un nuevo script"**.
3. Copia y pega el contenido del archivo [`script.js`](https://github.com/wernser412/UUP-Dump-Numeracion/raw/refs/heads/main/UUP%20Dump-%20Numeracion.user.js) en el editor de Tampermonkey.
4. Guarda el script y asegúrate de que esté habilitado.
3. **Visitar UUP Dump**: Abre [UUP Dump](https://uupdump.net) y verás los archivos con numeración y los botones para copiar los nombres.

## 🎨 Cómo funciona

- El script recorre los archivos listados en la página y les asigna un número secuencial.
- Agrega un botón "Copiar" al lado de cada archivo.
- Al hacer clic en el botón "Copiar", el nombre del archivo se copia automáticamente al portapapeles.

## 🛠️ Personalización

Puedes personalizar el ícono del botón de copiar y otros estilos cambiando el valor de la constante `iconoCopiar`. También puedes modificar la apariencia del botón a tu gusto.

## 🤝 Contribuciones

Si tienes ideas para mejorar este script, no dudes en abrir un **issue** o enviar un **pull request**.

## 📜 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
