
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ').length;

const reacWordCount = content.match(/React/ig).length;

console.log('Palabras: ', wordCount);
console.log('Palabras React: ', reacWordCount);