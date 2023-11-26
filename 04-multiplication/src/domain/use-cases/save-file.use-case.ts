import fs from 'fs'

export interface SaveFileUseCase {
  execute: (options: Options) => boolean
}

export interface Options {
  fileContent: string
  fileDestination?: string
  fileName?: string
}

export class SaveFile implements SaveFileUseCase {
  constructor() /**
   * repository: StorageRepository
   */ {}

  execute({
    fileContent,
    fileDestination = './outputs',
    fileName = 'table',
  }: Options): boolean {
    const mkdir = (path: string): string => {
      if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true })

      return path
    }

    try {
      const outputPath = mkdir(fileDestination)
      fs.writeFileSync(`${outputPath}/${fileName}.txt`, fileContent)

      return true
    } catch (error) {
      console.error(error)

      return false
    }
  }
}
