import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin'

describe('plugins/logger.plugin.ts', () => {
  test('buildLogger should return a function logger', () => {
    const logger = buildLogger('test')

    expect(typeof logger.log).toBe('function')
    expect(typeof logger.error).toBe('function')
  })

  test('logger.log should log a message', () => {
    const winstonLoggerSpy = jest.spyOn(winstonLogger, 'log')
    const message = 'test message'
    const service = 'test service'

    const logger = buildLogger(service)

    logger.log(message)

    expect(winstonLoggerSpy).toHaveBeenCalledWith('info', expect.objectContaining({
      message,
      service,
    }))
  })

  test('logger.error should error a message', () => {
    const winstonLoggerSpy = jest.spyOn(winstonLogger, 'error')
    const message = 'test message'
    const service = 'test service'

    const logger = buildLogger(service)

    logger.error(message)

    expect(winstonLoggerSpy).toHaveBeenCalledWith('error', expect.objectContaining({
      message,
      service,
    }))
  })

})
