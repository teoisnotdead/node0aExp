import { getPokemonById } from '../../src/js-foundation/06-promises'

describe('js-foundation/06-promises.ts', () => {
  test('getPokemonById should return a pokemon', async () => {
    const pokemonId = 1
    const pokemonName = await getPokemonById(pokemonId)

    expect(pokemonName).toBe('bulbasaur')
  })

  test('getPokemonById should return an error if the pokemon does not exist', async () => {
    const pokemonId = 1000000

    try {
      await getPokemonById(pokemonId)
    } catch (error) {
      expect(error).toBe(`Pokemon with id ${pokemonId} does not exist`)
    }
  })

})
