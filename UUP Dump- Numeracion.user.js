// ==UserScript==
// @name         UUP Dump: Numeración + Aria2 Export
// @namespace    http://tampermonkey.net/
// @version      2025.09.08
// @description  Enumera los archivos, añade botones para copiar nombre/URL y genera archivo aria2 para descarga masiva.
// @match        *://uupdump.net/get.php*
// @icon         https://github.com/wernser412/UUP-Dump-Numeracion/raw/refs/heads/main/icono.svg
// @downloadURL  https://github.com/wernser412/UUP-Dump-Numeracion/raw/refs/heads/main/UUP%20Dump-%20Numeracion.user.js
// @author       wernser412
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const iconoCopiar = '📋';
    const iconoUbicacion = '📍';

    const copiarTexto = async (texto, boton) => {
        try {
            await navigator.clipboard.writeText(texto);
            boton.textContent = '✅ Copiado';
            setTimeout(() => { boton.textContent = iconoCopiar + ' Copiar nombre'; }, 1500);
        } catch (err) {
            alert('Error al copiar: ' + err);
        }
    };

    const copiarDireccion = async (direccion, boton) => {
        try {
            await navigator.clipboard.writeText(direccion);
            boton.textContent = '✅ Copiado';
            setTimeout(() => { boton.textContent = iconoUbicacion + ' Copiar URL'; }, 1500);
        } catch (err) {
            alert('Error al copiar la dirección: ' + err);
        }
    };

    const crearBotonAria2 = () => {
        const tabla = document.querySelector('table.ui.table');
        if (!tabla || document.getElementById('btn-aria2')) return;

        const contenedor = document.createElement('div');
        contenedor.style.margin = '1em 0';

        const boton = document.createElement('button');
        boton.id = 'btn-aria2';
        boton.textContent = '⬇️ Descargar con aria2';
        boton.style.padding = '8px 12px';
        boton.style.fontSize = '1em';
        boton.style.cursor = 'pointer';
        boton.style.borderRadius = '6px';
        boton.style.border = '1px solid #ccc';
        boton.style.background = '#f2f2f2';
        boton.style.marginBottom = '1em';

        boton.addEventListener('click', () => {
            const filas = document.querySelectorAll('table.ui.table tbody tr');
            if (!filas.length) return;

            let contenido = '';

            filas.forEach(fila => {
                const enlace = fila.querySelector('a[href]');
                if (!enlace) return;
                const url = enlace.href;
                const nombre = enlace.textContent.trim();
                contenido += `${url}\n  out=${nombre}\n\n`;
            });

            const blob = new Blob([contenido], { type: 'text/plain' });
            const enlaceDescarga = document.createElement('a');
            enlaceDescarga.href = URL.createObjectURL(blob);
            enlaceDescarga.download = 'descargas.txt';
            enlaceDescarga.click();
        });

        contenedor.appendChild(boton);
        tabla.parentElement.insertBefore(contenedor, tabla);
    };

    const procesarTabla = () => {
        const filas = document.querySelectorAll('table.ui.table tbody tr');
        if (!filas.length) return;

        let contador = 1;

        filas.forEach(fila => {
            const celda = fila.querySelector('td:first-child');
            const enlace = celda?.querySelector('a[href]');
            if (!enlace) return;

            const nombre = enlace.textContent.trim();
            const urlArchivo = enlace.href;

            // Evita duplicados
            if (celda.querySelector('.boton-copiar-nombre')) return;

            // Botón copiar nombre
            const botonCopiar = document.createElement('button');
            botonCopiar.className = 'boton-copiar-nombre';
            botonCopiar.textContent = iconoCopiar + ' Copiar nombre';
            botonCopiar.style.marginLeft = '10px';
            botonCopiar.style.fontSize = '0.8em';
            botonCopiar.style.padding = '2px 6px';
            botonCopiar.style.cursor = 'pointer';
            botonCopiar.addEventListener('click', (e) => {
                e.preventDefault();
                copiarTexto(nombre, botonCopiar);
            });

            // Botón copiar URL
            const botonDireccion = document.createElement('button');
            botonDireccion.className = 'boton-copiar-url';
            botonDireccion.textContent = iconoUbicacion + ' Copiar URL';
            botonDireccion.style.marginLeft = '10px';
            botonDireccion.style.fontSize = '0.8em';
            botonDireccion.style.padding = '2px 6px';
            botonDireccion.style.cursor = 'pointer';
            botonDireccion.addEventListener('click', (e) => {
                e.preventDefault();
                copiarDireccion(urlArchivo, botonDireccion);
            });

            // Agregar elementos
            if (!celda.innerHTML.startsWith('<strong>')) {
                celda.innerHTML = `<strong>${contador}.</strong> `;
                celda.appendChild(enlace);
                celda.appendChild(botonCopiar);
                celda.appendChild(botonDireccion);
                contador++;
            }
        });
    };

    const esperarTabla = setInterval(() => {
        const tabla = document.querySelector('table.ui.table');
        if (!tabla) return;

        clearInterval(esperarTabla);
        crearBotonAria2();
        procesarTabla();
    }, 500);
})();
