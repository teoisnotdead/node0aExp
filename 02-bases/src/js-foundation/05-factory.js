// const { getUUID, getAge } = require('../plugins/index');

const buildMakePerson = ( {getUUID, getAge} ) => {

  return ({ name, birthDate }) => {

    return {
      id: getUUID(),
      name: name,
      birthDate: birthDate,
      age: getAge(birthDate)
    };
  }

}

// const obj = { name: 'John', birthDate: '1989-07-17' };

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
  buildMakePerson,
}