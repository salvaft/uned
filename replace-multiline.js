import { glob } from "glob"
import { fileURLToPath } from "url";
import path from 'path'
import fs from 'node:fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// const files = glob.sync(`${__dirname}/src/html-css/**/index.html`)

const files = glob.sync(`${__dirname}/src/**/*.html`)

files.forEach((file) => {
  fs.readFile(file, { encoding: 'utf-8' }).then((contents) => {
    if (regexOld.test(contents)) {
      // console.log(file)
      // const newContents = contents.replace(regexOld, newString)
      // fs.writeFile(file, newContents, { encoding: 'utf-8' }).then(() => console.log("Done with", file))
    }
  }
  )
})


// const newString = `// Estilado del boton de vover.Por defecto tiene display none y no aparece a no ser que se importe este CSS(que solo deberia pasar en desarrollo y despues del bundling porque estoy juntando todos los ejercicios)
// // (A usted no le deberia aparecer cuando abre la pagina ella sola, pero si un error 404 que se puede ignorar...)
// // Este import pasa a un archivo.css dentro de un link tag en el proceso de bundling
// // Lo hago de esta manera con un script tag para poder usar el alias @src
// import "@src/styles/volver.css"`
// const regexOld = /(const sideEffects[\S\s]*?sideEffects\(\);)/gm




// const regexOld = /(<script src="(..\/)*?main.js" type="module">)/gm
// const newString = `
//   <script type="module">
//     // El bundler lo organiza en un solo script. Esto es para poder usar el alias
//     import "@src/main.js"
//   </script>
// `
//
const testString = `  </script>
asdfasdfasdf
</script>

<script>asdfadsf
</script>


</script>
</script>`
const regexOld = /(<\/script>)[\s](<\/script>)/gim
const newString = ``



const singleMatch = testString.match(regexOld);
// const matches = testString.matchAll(regexOld);
// console.log([...matches])
console.log("Replacing", singleMatch, "with", newString)
// console.log(testString.replace(regexOld, "$1NEW_TEXT$2"))
console.log(testString.replace(regexOld, "$1"))
