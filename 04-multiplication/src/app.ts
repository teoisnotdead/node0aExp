import { yarg } from './config/plugins/args.plugin'

// console.log(process.argv);

// console.log(yarg)

(async () => {
  await main()
  console.log('Fin del programa');
})()

async function main() {
  console.log( yarg );
}