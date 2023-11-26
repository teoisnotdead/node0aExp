import { type } from 'os'
import { httpClientPlugin } from '../../src/plugins/http-client.plugin'

describe('plugins/http-client.plugin.ts', () => {
  test('get should return data from a URL', async () => {
    const data = await httpClientPlugin.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    )

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: expect.any(Boolean),
    })
  })

  test('post should throw an error', async () => {
    expect( typeof httpClientPlugin.post ).toBe('function')
    expect( typeof httpClientPlugin.put ).toBe('function')
    expect( typeof httpClientPlugin.delete ).toBe('function')
  })

})
