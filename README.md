# 🖍️ UUP Dump: Numeración + Descarga con aria2

Este script de Tampermonkey agrega numeración a los archivos listados en la página de [UUP Dump](https://uupdump.net) y ofrece herramientas útiles como copiar nombres y URLs de archivos, además de generar un archivo compatible con **aria2** para descargar todo de forma masiva.

---

## ✨ Características

- 🔢 **Numeración automática**: Cada archivo tiene un número secuencial al lado del nombre.
- 📋 **Copiar nombre del archivo**: Un botón que permite copiar el nombre del archivo con un solo clic.
- 📍 **Copiar URL del archivo**: También puedes copiar directamente la URL de descarga.
- ⬇️ **Descarga con aria2**: Botón para generar un archivo `descargas.txt` listo para usar con [aria2](https://aria2.github.io/).
- 💡 **Interfaz no invasiva**: No modifica el diseño original de la página, solo añade funcionalidades útiles.

---

## 🚀 Instalación

1. Instala la extensión **[Tampermonkey](https://www.tampermonkey.net/)** en tu navegador (compatible con Chrome, Firefox, Edge, y otros).
2. Haz clic en este enlace para instalar el script:  
   👉 **[Descargar Script](https://github.com/wernser412/UUP-Dump-Numeracion/raw/refs/heads/main/UUP%20Dump-%20Numeracion.user.js)**
3. Visita [UUP Dump](https://uupdump.net/) o una URL como `https://uupdump.net/get.php?...`
4. Verás:
   - Los archivos numerados
   - Botones "📋 Copiar nombre" y "📍 Copiar URL"
   - Y arriba, un botón para **"⬇️ Descargar con aria2"**

---

## 🚀 📥 Comando para descargar con aria2:

<pre>
   aria2c -i descargas.txt -x 8 -s 8 --continue
</pre>
🔹 Explicación de los parámetros:

- -i descargas.txt: usa la lista de URLs generada

- -x 8: permite hasta 8 conexiones por archivo

- -s 8: descarga hasta 8 archivos en paralelo

- --continue: permite reanudar descargas si se interrumpen

## 🛠️ Cómo funciona

- El script detecta la tabla de archivos automáticamente.
- Numera cada entrada.
- Agrega botones para copiar nombre y URL.
- El botón de aria2 genera automáticamente un archivo `descargas.txt` en este formato:

---

## 🎨 Cómo funciona

- El script recorre los archivos listados en la página y les asigna un número secuencial.
- Agrega un botón "Copiar" al lado de cada archivo.
- Al hacer clic en el botón "Copiar", el nombre del archivo se copia automáticamente al portapapeles.

---

## 🤝 Contribuciones

Si tienes ideas para mejorar este script, no dudes en abrir un **issue** o enviar un **pull request**.

---

## 📜 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
