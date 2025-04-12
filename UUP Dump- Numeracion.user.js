// ==UserScript==
// @name         UUP Dump: Numeración
// @namespace    http://tampermonkey.net/
// @version      1.5.1
// @description  Enumera los archivos y añade un botón para copiar el nombre del archivo al portapapeles.
// @match        *://uupdump.net/*
// @downloadURL  https://github.com/wernser412/UUP-Dump-Numeracion/raw/refs/heads/main/UUP%20Dump-%20Numeracion.user.js
// @author       wernser412
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const iconoCopiar = '📋'; // Puedes cambiarlo por un ícono SVG/base64 si prefieres
    const copiarTexto = async (texto, boton) => {
        try {
            await navigator.clipboard.writeText(texto);
            boton.textContent = '✅ Copiado';
            setTimeout(() => { boton.textContent = iconoCopiar + ' Copiar'; }, 1500);
        } catch (err) {
            alert('Error al copiar: ' + err);
        }
    };

    const esperar = setInterval(() => {
        const filas = document.querySelectorAll('table.ui.table tbody tr');
        if (!filas.length) return;

        clearInterval(esperar);
        let contador = 1;

        filas.forEach(fila => {
            const celda = fila.querySelector('td:first-child');
            const enlace = celda?.querySelector('a[href]');
            if (!enlace) return;

            const nombre = enlace.textContent.trim();

            // Crear botón de copiar
            const botonCopiar = document.createElement('button');
            botonCopiar.textContent = iconoCopiar + ' Copiar';
            botonCopiar.style.marginLeft = '10px';
            botonCopiar.style.fontSize = '0.8em';
            botonCopiar.style.padding = '2px 6px';
            botonCopiar.style.cursor = 'pointer';

            botonCopiar.addEventListener('click', (e) => {
                e.preventDefault();
                copiarTexto(nombre, botonCopiar);
            });

            // Agregar número y botón
            if (!celda.innerHTML.startsWith('<strong>')) {
                celda.innerHTML = `<strong>${contador}.</strong> `;
                celda.appendChild(enlace);
                celda.appendChild(botonCopiar);
                contador++;
            }
        });
    }, 500);
})();
