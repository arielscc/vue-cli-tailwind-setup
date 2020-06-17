module.exports = (api, opts) => {

  // Con el complemento de servicio puede registrar un nuevo comando cli-service además de los estándares (es decir, servey build). Puedes hacerlo con un registerCommandmétodo API.
  
  // En este ejemplo proporcionamos el nombre del comando ( 'greet'), un objeto de opciones de comando con descriptiony usage, y una función que se ejecutará en el vue-cli-service greetcomando.

  // api.registerCommand(
  //   'greet',
  //   {
  //     description: 'Writes a greeting to the console',
  //     usage: 'vue-cli-service greet [options]',
  //     options: { '--name': 'specifies a name for greeting' }
  //   },
  //   args => {
  //     if (args.name) {
  //       console.log(`👋 Hello, ${args.name}!`);
  //     } else {
  //       console.log(`👋 Hello!`);
  //     }
  //   }
  // );
}
