import fs from 'fs'
import { yarg } from './config/plugins/args.plugin'

console.log(yarg);

const mkdir = (path: string): string => {
  if (!fs.existsSync(path)) fs.mkdirSync(path)

  return path
}

const tablaDeMultiplicar = (numero: number): void => {
  const base = yarg.base = numero
  let limit = yarg.limit as number
  const showTable = yarg.show as boolean
  
  const titulo = `Tabla del ${base}`
  const lineas = '======================='
  const header = `${lineas}\n${titulo}\n${lineas}`
  const outputPath = mkdir('./outputs')
  const fileName = `/tabla-${base}.txt`
  let data = header + '\n'

  for (let i = 1; i <= limit; i++) {
    const resultado = `${base} x ${i} = ${base * i}`
    data += `${resultado}\n`
    
  }
  console.log('File created');
  fs.writeFileSync(`${outputPath}${fileName}`, data)

  if (showTable) console.log(data)

}

tablaDeMultiplicar(yarg.base as number)
