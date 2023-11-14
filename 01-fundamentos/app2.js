
const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8');

const newData = data.replace(/React/ig, 'Angular');

// console.log(data);

fs.writeFileSync('README-Angular.md', newData); 