import { yarg } from './config/plugins/args.plugin'
import { ServerApp } from './presentation/server-app';

// console.log(process.argv);

// console.log(yarg)

(async () => {
  await main()
  // console.log('Fin del programa');
})()

async function main() {
  // console.log('Inicio del programa');
  // console.log( yarg );

  const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg

  ServerApp.run({ base, limit, showTable, fileName, fileDestination })

}