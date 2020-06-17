module.exports = api => {
    api.render('./template');

    // Se agraga una dependencia adicional que sera añadida al archivo package.json
    api.extendPackage({
      dependencies: {
        'tailwindcss': '^1.4.6'
      }
    });

    //Generamos un script dentro del archivo package.json
    // api.extendPackage({
    //   scripts: {
    //     greet: 'vue-cli-service greet'
    //   }
    // })

    //este metodo sirve para adicionar las importaciones al archivo principal en el proyecto( index.js, index.ts)
    api.injectImports(api.entryFile, `import "@/assets/css/tailwind.css"`)

  }


// module.exports.hooks = (api) => {
//   api.afterInvoke(() => {
//     const fs = require('fs')
//     const contentMain = fs.readFileSync(api.resolve(api.entryFile), { encoding: 'utf-8' })
//     const lines = contentMain.split(/\r?\n/g)
//     const renderIndex = lines.findIndex(line => line.match(/render/))
//     lines[renderIndex] += `\n  router,`
//     fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
//   })
// }