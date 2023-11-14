// const { emailTemplate } = require('./js-foundation/01-template');
// import { emailTemplate } from './js-foundation/01-template';

// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { getUUID, getAge } = require('./plugins/index');
const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(4)
  .then((pokemon) => console.log(pokemon))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finalizado'));

  // token de acceso
  // publicas

// !Referencia a la función factory y uso de la misma
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: 'John', birthDate: '1989-07-17' };

// const john = makePerson(obj);

// console.log(john);