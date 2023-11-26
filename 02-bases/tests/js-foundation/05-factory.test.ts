import { buildMakePerson } from '../../src/js-foundation/05-factory'

describe('js-foundation/05-factory.ts', () => {
  const getAge = () => 10
  const getUUID = () => '1234'

  test('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({ getAge, getUUID })

    expect(typeof makePerson).toBe('function')
  })

  test('makePerson should return a person', () => {
    const makePerson = buildMakePerson({ getAge, getUUID })
    const person = makePerson({ name: 'John', birthdate: '1985-10-21' })

    expect(person).toEqual({
      id: '1234',
      name: 'John',
      birthdate: '1985-10-21',
      age: 10,
    })
  })
})
