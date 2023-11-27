import { SaveFile } from './save-file.use-case'
import fs from 'fs'
describe('SaveFileUseCase', () => {
  beforeEach(() => {
    // clean up

    fs.rmSync('./outputs', { recursive: true, force: true })
  })

  afterEach(() => {
    // clean up

    fs.rmSync('./outputs', { recursive: true, force: true })
  })

  test('should save file with default values', () => {
    const saveFile = new SaveFile()
    const filePath = './outputs/table.txt'
    const options = { fileContent: 'test' }
    const result = saveFile.execute(options)

    const fileExists = fs.existsSync(filePath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

    expect(result).toBe(true)
    expect(fileExists).toBe(true)
    expect(fileContent).toBe(options.fileContent)
  })

  test('should save file with custom values', () => {
    const saveFile = new SaveFile()
    const options = {
      fileContent: 'custom content',
      fileDestination: './custom-output/file-destination',
      fileName: 'custom-file-name',
    }
    const filePath = `${options.fileDestination}/${options.fileName}.txt`
    const result = saveFile.execute(options)

    const fileExists = fs.existsSync(filePath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

    expect(result).toBe(true)
    expect(fileExists).toBe(true)
    expect(fileContent).toBe(options.fileContent)
  })

})
