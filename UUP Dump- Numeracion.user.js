// ==UserScript==
// @name         UUP Dump: Numeración + Aria2 Export
// @namespace    http://tampermonkey.net/
// @version      2025.09.08
// @description  Enumera los archivos, añade botones para copiar nombre/URL y genera archivo aria2 para descarga masiva.
// @match        *://uupdump.net/get.php*
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjcuNzMzIDY3LjczMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIG9mZnNldD0iLjI1Ii8+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNDk4MDQiIG9mZnNldD0iLjUiLz48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBvZmZzZXQ9Ii43NSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgb2Zmc2V0PSIuNSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiM5OTkiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIG9mZnNldD0iLjEzNDM3Ii8+PHN0b3Agc3RvcC1jb2xvcj0iI2IzYjNiMyIgb2Zmc2V0PSIuMjY4NzMiLz48c3RvcCBzdG9wLWNvbG9yPSIjOTk5IiBvZmZzZXQ9Ii4zMTcyOCIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIG9mZnNldD0iLjU2NzI4Ii8+PHN0b3Agc3RvcC1jb2xvcj0iI2IzYjNiMyIgb2Zmc2V0PSIuNzgzNjQiLz48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBvZmZzZXQ9Ii44MDA5NCIvPjxzdG9wIHN0b3AtY29sb3I9IiNkOGQ4ZDgiIG9mZnNldD0iLjg5MTgyIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzgwODA4MCIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJxIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEuNTM5Njk3OSIvPjwvZmlsdGVyPjxyYWRpYWxHcmFkaWVudCBpZD0iZSIgY3g9IjM2NS42OCIgY3k9IjI4My4zNSIgcj0iMTQ1LjIzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuMDU3NSAwIC0zLjY1MzJlLTYgLjE0OTQ2IC0yMS4wMjMgMjE1LjM4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM0ZDRkNGQiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiM5OTkiIG9mZnNldD0iLjUiLz48c3RvcCBzdG9wLWNvbG9yPSIjYjNiM2IzIiBzdG9wLW9wYWNpdHk9Ii4wMTc5NjQiIG9mZnNldD0iMSIvPjwvcmFkaWFsR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwIiB4MT0iMzE0LjU5IiB4Mj0iMzc5LjU5IiB5MT0iMjg3Ljk4IiB5Mj0iMjg2LjYxIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMzA4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNhIi8+PGxpbmVhckdyYWRpZW50IGlkPSJvIiB4MT0iMTk5LjY5IiB4Mj0iNDU3Ljc4IiB5MT0iMjY3LjA0IiB5Mj0iMjY3LjA0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC45OTYxIDAgMCAxIC43ODE0NyAzMDcuOTkpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2MiLz48bGluZWFyR3JhZGllbnQgaWQ9Im4iIHgxPSIyMjUuOTEiIHgyPSI1MTYuMTciIHkxPSIyNTIuMzUiIHkyPSIyNTIuMzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNjY2IiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjODA4MDgwIiBvZmZzZXQ9Ii4yNSIvPjxzdG9wIHN0b3AtY29sb3I9IiNiM2IzYjMiIG9mZnNldD0iLjUiLz48c3RvcCBzdG9wLWNvbG9yPSIjY2NjIiBvZmZzZXQ9Ii43NSIvPjxzdG9wIHN0b3AtY29sb3I9IiM4MDgwODAiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJtIiB4MT0iMjAzLjMiIHgyPSI0NTQuNjIiIHkxPSIyNTUuMDciIHkyPSIyNTIuNTQiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwzMDgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2IiLz48bGluZWFyR3JhZGllbnQgaWQ9ImwiIHgxPSI0NzIuNDQiIHgyPSI3MTkuNDUiIHkxPSIzODUuNjciIHkyPSIzODMuMjgiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2OC43LDM0LjY4NikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjOTk5IiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjNjY2IiBvZmZzZXQ9Ii4zMTMxMSIvPjxzdG9wIHN0b3AtY29sb3I9IiM5OTkiIG9mZnNldD0iLjQ0NDMiLz48c3RvcCBzdG9wLWNvbG9yPSIjY2NjIiBvZmZzZXQ9Ii41NzU0OSIvPjxzdG9wIHN0b3AtY29sb3I9IiM4MDgwODAiIG9mZnNldD0iLjgwMDQxIi8+PHN0b3Agc3RvcC1jb2xvcj0iI2NjYyIgb2Zmc2V0PSIuOTAwMiIvPjxzdG9wIHN0b3AtY29sb3I9IiM2NjYiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJrIiB4MT0iMzE0LjU5IiB4Mj0iMzc5LjU5IiB5MT0iMjg3Ljk4IiB5Mj0iMjg2LjYxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2EiLz48bGluZWFyR3JhZGllbnQgaWQ9ImoiIHgxPSIxOTkuNjkiIHgyPSI0NTcuNzgiIHkxPSIyNjcuMDQiIHkyPSIyNjcuMDQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjk5NjEgMCAwIDEgLjc4MTQ3IC0uMDA2NDUwOSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjYyIvPjxsaW5lYXJHcmFkaWVudCBpZD0iaSIgeDE9IjIwMy4zIiB4Mj0iNDU0LjYyIiB5MT0iMjU1LjA3IiB5Mj0iMjUyLjU0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2IiLz48bGluZWFyR3JhZGllbnQgaWQ9ImgiIHgxPSIyMDMuMyIgeDI9IjQ1NC42MiIgeTE9IjI1NS4wNyIgeTI9IjI1Mi41NCIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwLDMwNikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjYjNiM2IzIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjNjY2IiBzdG9wLW9wYWNpdHk9Ii41MDIiIG9mZnNldD0iLjI3OTg3Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzgwODA4MCIgb2Zmc2V0PSIuNSIvPjxzdG9wIHN0b3AtY29sb3I9IiM2NjYiIG9mZnNldD0iLjc1Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzgwODA4MCIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIxNjQuMjEiIHgyPSIyNjcuNzYiIHkxPSI0MDQuOTUiIHkyPSI0MDYuMTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4MT0iMzE0LjA2IiB4Mj0iMzcwLjE3IiB5MT0iMjg2LjM2IiB5Mj0iMjg2LjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjgwMjQiIG9mZnNldD0iLjI2MjI4Ii8+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgb2Zmc2V0PSIuNzM3ODEiLz48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJkIiB4MT0iMjI1LjkxIiB4Mj0iNTE2LjE3IiB5MT0iMjUyLjM1IiB5Mj0iMjUyLjM1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI24iLz48cmFkaWFsR3JhZGllbnQgaWQ9InQiIGN4PSI2My44OTQiIGN5PSIxMTcuMzUiIHI9IjUzLjkxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC4wODY0MiAwIDEwNy4yMSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMSIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJzIiBjeD0iNjQuNyIgY3k9Ii0xNS4xNzQiIHI9IjU1LjI3IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuNTMzMSAtMy4xMzU4ZS04IDIuNDA0OWUtOCAxLjEyNCAtMzMuODI4IDIuOTkwOSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZWVlIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjZWVlIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMSIvPjwvcmFkaWFsR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJyIiB4Mj0iMCIgeTE9IjguNzA3IiB5Mj0iMTIwLjU0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2YwZmY4MCIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzhiYjMwMCIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjI5LjI3KSI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLjE3NDE3IDAgMCAuMTcxODMgLTM3LjY1NCAxOTAuNSkiPjxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDEuMDcwNiwwLDAsMS41MzkzLC0xOC42NywxODkuOTQpIiBkPSJtNTE2LjE4IDI1My4yMmMwIDExLjk4Ny02NS4wMiAyMS43MDUtMTQ1LjIzIDIxLjcwNS04MC4yMDYgMC0xNDUuMjMtOS43MTc3LTE0NS4yMy0yMS43MDVzNjUuMDItMjEuNzA1IDE0NS4yMy0yMS43MDVjODAuMjA2IDAgMTQ1LjIzIDkuNzE3NyAxNDUuMjMgMjEuNzA1eiIgZmlsbD0idXJsKCNlKSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjcSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0My44NikiPjxwYXRoIGQ9Im0zMDcuODcgNTgzLjE5IDc3LjEzMy0yLjAyMzEtMTYuMTg3IDMxLjUwMi00My4zNDUgMS4yNjQ0eiIgZmlsbD0idXJsKCNwKSIvPjxnIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTMyOC4xOSA1MzQuMTJjLTcwLjQxNyAwLTEyNy41IDEwLjc0NS0xMjcuNSAyNC4wMDEgMCAwLjIyNzAzLTJlLTMgMC40NjIgMC4wMzExIDAuNjg3NTJoLTAuMDMxMXYzMi4wMDFoMC4wMzExYzEuOTA5MyAxMi45NDEgNTguMjU5IDIzLjMxMyAxMjcuNDcgMjMuMzEzczEyNS41My0xMC4zNzIgMTI3LjQ0LTIzLjMxM2gwLjA2MjN2LTMyLjAwMWgtMC4wNjIzYzAuMDMzMy0wLjIyNTUyIDAuMDYyMy0wLjQ2MDQ5IDAuMDYyMy0wLjY4NzUyIDAtMTMuMjU1LTU3LjA4NC0yNC4wMDEtMTI3LjUtMjQuMDAxeiIgZmlsbD0idXJsKCNvKSIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9Ii45OTgwNiIvPjxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KC44NDY5NSAwIDAgLjk2NzUyIDE0LjAwMyAzMTQuMTUpIiBkPSJtNTE2LjE4IDI1My4yMmMwIDExLjk4Ny02NS4wMiAyMS43MDUtMTQ1LjIzIDIxLjcwNS04MC4yMDYgMC0xNDUuMjMtOS43MTc3LTE0NS4yMy0yMS43MDVzNjUuMDItMjEuNzA1IDE0NS4yMy0yMS43MDVjODAuMjA2IDAgMTQ1LjIzIDkuNzE3NyAxNDUuMjMgMjEuNzA1eiIgZmlsbD0idXJsKCNkKSIvPjxwYXRoIGQ9Im0yMDUuNjcgNTU4LjVjLTEuMzMzNSAxLjIyOTItMi4wMzEyIDIuNDg3NC0yLjAzMTIgMy43ODEyIDAgMTEuNTk4IDU1Ljk2NCAyMSAxMjUgMjFzMTI1LTkuNDAyIDEyNS0yMWMwLTEuMjg4Ni0wLjcwODM4LTIuNTU2OC0yLjAzMTItMy43ODEyIDAuMDEzOSAwLjEyOTgyIDAuMDMxMiAwLjI3NTg2IDAuMDMxMiAwLjQwNjI1IDAgMTEuNTk4LTU1LjA2OSAyMS0xMjMgMjFzLTEyMy05LjQwMi0xMjMtMjFjMC0wLjEzMTAzIDAuMDE3Mi0wLjI3NTc5IDAuMDMxMi0wLjQwNjI1eiIgZmlsbD0idXJsKCNtKSIvPjwvZz48cGF0aCBkPSJtMjA1LjE5IDI3MC4zOWgyNDZsMC40ODI3NyAyODguMTFjMC4wMzMyIDE5LjgyNS05Mi41NTggMjMuMTg0LTEyOS43MSAyMi43NjgtNTMuMjMxLTAuNTk1MjEtMTE2LjI2LTYuODUzNi0xMTYuMjktMjIuNzY4eiIgZmlsbD0idXJsKCNsKSIgb3BhY2l0eT0iLjMzMyIvPjxwYXRoIGQ9Im0zMDcuODcgMjc1LjE5IDc3LjEzMy0yLjAyMzEtMTYuMTg3IDMxLjUwMi00My4zNDUgMS4yNjQ0eiIgZmlsbD0idXJsKCNrKSIvPjxnIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTMyOC4xOSAyMjYuMTJjLTcwLjQxNyAwLTEyNy41IDEwLjc0NS0xMjcuNSAyNC4wMDEgMCAwLjIyNzAzLTJlLTMgMC40NjIgMC4wMzExIDAuNjg3NTJoLTAuMDMxMXYzMi4wMDFoMC4wMzExYzEuOTA5MyAxMi45NDEgNTguMjU5IDIzLjMxMyAxMjcuNDcgMjMuMzEzczEyNS41My0xMC4zNzIgMTI3LjQ0LTIzLjMxM2gwLjA2MjN2LTMyLjAwMWgtMC4wNjIzYzAuMDMzMy0wLjIyNTUyIDAuMDYyMy0wLjQ2MDQ5IDAuMDYyMy0wLjY4NzUyIDAtMTMuMjU1LTU3LjA4NC0yNC4wMDEtMTI3LjUtMjQuMDAxeiIgZmlsbD0idXJsKCNqKSIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9Ii45OTgwNiIvPjxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KC44NDY5NSAwIDAgLjk2NzUyIDE0LjAwMyA2LjE0NjUpIiBkPSJtNTE2LjE4IDI1My4yMmMwIDExLjk4Ny02NS4wMiAyMS43MDUtMTQ1LjIzIDIxLjcwNS04MC4yMDYgMC0xNDUuMjMtOS43MTc3LTE0NS4yMy0yMS43MDVzNjUuMDItMjEuNzA1IDE0NS4yMy0yMS43MDVjODAuMjA2IDAgMTQ1LjIzIDkuNzE3NyAxNDUuMjMgMjEuNzA1eiIgZmlsbD0idXJsKCNkKSIvPjxwYXRoIGQ9Im0yMDUuNjcgMjUwLjVjLTEuMzMzNSAxLjIyOTItMi4wMzEyIDIuNDg3NC0yLjAzMTIgMy43ODEyIDAgMTEuNTk4IDU1Ljk2NCAyMSAxMjUgMjFzMTI1LTkuNDAyIDEyNS0yMWMwLTEuMjg4Ni0wLjcwODM4LTIuNTU2OC0yLjAzMTItMy43ODEyIDAuMDEzOSAwLjEyOTgyIDAuMDMxMiAwLjI3NTg2IDAuMDMxMiAwLjQwNjI1IDAgMTEuNTk4LTU1LjA2OSAyMS0xMjMgMjFzLTEyMy05LjQwMi0xMjMtMjFjMC0wLjEzMTAzIDAuMDE3Mi0wLjI3NTc5IDAuMDMxMi0wLjQwNjI1eiIgZmlsbD0idXJsKCNpKSIvPjwvZz48cGF0aCBkPSJtMjA1LjY3IDU1Ni41Yy0xLjMzMzUgMS4yMjkyLTIuMDMxMiAyLjQ4NzQtMi4wMzEyIDMuNzgxMiAwIDExLjU5OCA1NS45NjQgMjEgMTI1IDIxczEyNS05LjQwMiAxMjUtMjFjMC0xLjI4ODYtMC43MDgzOC0yLjU1NjgtMi4wMzEyLTMuNzgxMiAwLjAxMzkgMC4xMjk4MiAwLjAzMTIgMC4yNzU4NiAwLjAzMTIgMC40MDYyNSAwIDExLjU5OC01NS4wNjkgMjEtMTIzIDIxcy0xMjMtOS40MDItMTIzLTIxYzAtMC4xMzEwMyAwLjAxNzItMC4yNzU3OSAwLjAzMTItMC40MDYyNXoiIGZpbGw9InVybCgjaCkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Im0yMDggMjk1LjM2LTIuNDg1NSAyNjYuMzhjNC4xMTQ4IDguMTE1OCAxNS45NjMgOS42OTY0IDM4LjQ4NSAxNC4yMThsMi0yNzIuNTl6IiBmaWxsPSJ1cmwoI2cpIi8+PHBhdGggZD0ibTMxNC44NCAyNzUuMTljMjAuNjQ5IDAuNzM1ODMgMzQuMTI0IDAuNzgxODEgNTUuMzI1LTEuMTAzN2wtMTQuNzYyIDMwLjc2N2MtOS45MzM2IDAuNjQzODUtMTcuNjYgMS4wMTE4LTI2LjQ5IDAuNjg5ODR6IiBmaWxsPSJ1cmwoI2YpIi8+PC9nPjxwYXRoIGQ9Im0zMjMuNjQgMjczLjYzIDYuNzcxNCAwLjQwNjE0LTAuNDI5NzUgMzAuMjUtNi4wNjgyLTAuNDkxNDZ6IiBmaWxsPSIjODA4MDgwIi8+PHBhdGggZD0ibTMyNC4yMSA1ODEuNjggNC4yNDQ3IDAuMjU3MjYtMS41MjY5IDMwLjE1Ny0yLjA2NTQtMC4xMTAyeiIgZmlsbD0iIzgwODA4MCIvPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCguMjg1MDkgMCAwIC4yODUwOSAzMi41NTQgMjYxLjIzKSI+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4yOTk3IDMuNDUzNikiIGQ9Im0xMTcuOCAxMTcuMzVhNTMuOTEgNC42NTg5IDAgMSAxLTEwNy44MiAwIDUzLjkxIDQuNjU4OSAwIDEgMSAxMDcuODIgMHoiIGZpbGw9InVybCgjdCkiIG9wYWNpdHk9Ii40NDMiLz48cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCgxLjAxMTkgMCAwIDEuMDI2NyAtMi4xMzUgLTQuNDAzKSIgZD0ibTEyMi4wOSA2NC42MjZhNTYuNzM0IDU1LjkxOSAwIDEgMS0xMTMuNDcgMCA1Ni43MzQgNTUuOTE5IDAgMSAxIDExMy40NyAweiIgZmlsbD0idXJsKCNyKSIvPjxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KDEuMDExOSAwIDAgMS4wMjY3IC0yLjEzNSAtNC40MDMpIiBkPSJtMTIyLjA5IDY0LjYyNmE1Ni43MzQgNTUuOTE5IDAgMSAxLTExMy40NyAwIDU2LjczNCA1NS45MTkgMCAxIDEgMTEzLjQ3IDB6IiBmaWxsPSJub25lIiBzdHJva2U9IiM2MzgwMDAiIHN0cm9rZS13aWR0aD0iMy45MjQiLz48cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCgxLjAxMTkgMCAwIDEuMDI2NyAtMi4xMzUgLTQuNDAzKSIgZD0ibTY1LjM0NCAxMS4yMTljLTI5Ljk4IDAtNTQuMjE5IDIzLjkxNi01NC4yMTkgNTMuNDA2czI0LjIzOSA1My40MDYgNTQuMjE5IDUzLjQwNiA1NC4yNS0yMy45MTcgNTQuMjUtNTMuNDA2LTI0LjI3LTUzLjQwNi01NC4yNS01My40MDZ6IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjcykiIHN0cm9rZS13aWR0aD0iMi4wNzkiLz48cGF0aCBkPSJtNDMuNTc5IDI0Ljc5MWMtMC41NTU0OCAwLjA1NDQzLTAuOTc5MTIgMC41MjEyNi0wLjk3OTQ5IDEuMDc5NHYyOS4xNDNsLTE2Ljk3MSAwLjAyYy0wLjQyMTc1LTAuMDAxOS0wLjc5OTQ5IDAuMjM4MjQtMC45Nzk1IDAuNjE5NjMtMC4xNzk5OSAwLjM4MTQtMC4xMjk2NSAwLjgzNDk4IDAuMTM5OTQgMS4xNTkzbDM4LjcyIDQ2LjUxM2MwLjIwOTEzIDAuMjQ5MTggMC41MTQyOCAwLjM4MzY2IDAuODM5NTcgMC4zNzk3OCAwLjMyNTI5LTRlLTMgMC42MzY0My0wLjE0NTY4IDAuODM5NTctMC4zOTk3NmwzOC4wNC00Ni41MTNjMC4yNTcxNS0wLjMyNDY5IDAuMjk4MzUtMC43NjU1NSAwLjExOTk0LTEuMTM5My0wLjE3ODQxLTAuMzczNzgtMC41NDUzMy0wLjYxNTMyLTAuOTU5NTEtMC42MTk2M2wtMTYuOTcxLTAuMDIgMC4wMTk5OS0yOS4xNDNjLTAuMDAxNi0wLjI4OTI2LTAuMTEzNDEtMC41NTY4OS0wLjMxOTg0LTAuNzU5NTUtMC4yMDY0My0wLjIwMjY2LTAuNDkwMzMtMC4zMjM1Ny0wLjc3OTYtMC4zMTk4MWgtNDAuNjU5Yy0wLjAzMzMtMC4wMDE1LTAuMDY2NjUtMC4wMDE1LTAuMDk5OTUgMHoiIGZpbGw9IiM1NTUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIzLjM5MyIvPjwvZz48L2c+PC9zdmc+Cg==
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
