const fs = require('fs');

const ls = fs.readFileSync('big.bin');
const twice = {
  one: ls,
  two: ls
}
console.log(JSON.stringify(twice));
