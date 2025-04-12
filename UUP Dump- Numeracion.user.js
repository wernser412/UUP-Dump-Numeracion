// ==UserScript==
// @name         UUP Dump: Numeración
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Enumera los archivos y añade un botón para copiar el nombre del archivo al portapapeles.
// @match        *://uupdump.net/*
// @downloadURL  https://github.com/wernser412/UUP-Dump-Numeracion/raw/refs/heads/main/UUP%20Dump-%20Numeracion.user.js
// @icon         https://github.com/wernser412/UUP-Dump-Numeracion/raw/refs/heads/main/icono.svg
// @author       wernser412
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const iconoCopiar = '📋'; // Ícono para copiar el nombre del archivo
    const iconoUbicacion = '📍'; // Ícono para copiar la URL del archivo
    const copiarTexto = async (texto, boton) => {
        try {
            await navigator.clipboard.writeText(texto);
            boton.textContent = '✅ Copiado';
            setTimeout(() => { boton.textContent = iconoCopiar + ' Copiar'; }, 1500);
        } catch (err) {
            alert('Error al copiar: ' + err);
        }
    };

    const copiarDireccion = async (direccion, boton) => {
        try {
            await navigator.clipboard.writeText(direccion);
            boton.textContent = '✅ Copiado';
            setTimeout(() => { boton.textContent = iconoUbicacion + ' Dirección'; }, 1500);
        } catch (err) {
            alert('Error al copiar la dirección: ' + err);
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
            const urlArchivo = enlace.href; // Obtener la URL del archivo

            // Crear botón de copiar nombre
            const botonCopiar = document.createElement('button');
            botonCopiar.textContent = iconoCopiar + ' Copiar nombre';
            botonCopiar.style.marginLeft = '10px';
            botonCopiar.style.fontSize = '0.8em';
            botonCopiar.style.padding = '2px 6px';
            botonCopiar.style.cursor = 'pointer';

            botonCopiar.addEventListener('click', (e) => {
                e.preventDefault();
                copiarTexto(nombre, botonCopiar);
            });

            // Crear botón de copiar dirección
            const botonDireccion = document.createElement('button');
            botonDireccion.textContent = iconoUbicacion + 'Copiar Dirección';
            botonDireccion.style.marginLeft = '10px';
            botonDireccion.style.fontSize = '0.8em';
            botonDireccion.style.padding = '2px 6px';
            botonDireccion.style.cursor = 'pointer';

            botonDireccion.addEventListener('click', (e) => {
                e.preventDefault();
                copiarDireccion(urlArchivo, botonDireccion);
            });

            // Agregar número, botón de copiar nombre y botón de copiar dirección
            if (!celda.innerHTML.startsWith('<strong>')) {
                celda.innerHTML = `<strong>${contador}.</strong> `;
                celda.appendChild(enlace);
                celda.appendChild(botonCopiar);
                celda.appendChild(botonDireccion);
                contador++;
            }
        });
    }, 500);
})();
