const { http } = require('../plugins/');

const getPokemonById = async(id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await http.get(url);

  return pokemon.name;
  // return fetch(url)
  //   .then((response) => {
  //   response.json().then((pokemon) => {
  //     console.log(pokemon.name);
  //   });
  // });
  
}

module.exports = getPokemonById;