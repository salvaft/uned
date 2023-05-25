# Readme
Hola,  me gustaria hacer la entrega con tiempo para implementar posible feedback.

Este es el [ repo ](https://gitlab.com/SalvaToro/uned) de la primera practica. Y aquí [ está ](https://uned.netlify.app) desplegado.

Como puede ver, es un sitio donde voy acumulando los ejercicios del master. Uso vite como dev server y para el bundling (rollup y swc).

La parte de `fmwjs` está dentro. No lo considero un mono repo porque es una sola app web con subrutas, pero lo que si es cierto es que el ejercicio `fwjs` no está desacoplado del resto y el repo no es especifico a este ejercicio.

Aun asi, todo lo que es codigo `lib`, tipo funciones, `assets`, etc, si lo tengo concentrado en el ejercicio, y no en el root del proyecto. Basicamente lo unico especifico es el `basename` para react router, si se copia la carpeta y se hace un npm init dentro de  ejercicio 1, se anade un `vite.config.css`, deberia funcionar.

Si hiciera falta re-estructurarlo dígame.
