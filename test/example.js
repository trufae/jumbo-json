//const hugeJSON = require('jumbo-json');
const fs = require('fs');
const hugeJSON = require('./json-async-stream');

const ls = fs.readFileSync('/bin/ls');

// console.log(JSON.stringify(ls));
let fullMsg = '';
hugeJSON.stringify({
  data: Buffer (ls),
}, msg => {
  fullMsg += msg;
/*
  if (fullMsg.length > 4096) {
    process.stdout.write(fullMsg);
    fullMsg = '';
  }
*/
}).then(_=> {
//  process.stdout.write(fullMsg);
}).catch(err => {
  console.error(err.toString());
});


// const rs = fs.createReadStream('big.json')
const rs = fs.createReadStream('tiny.json')
hugeJSON.parse(rs, (err, obj) => {
  if (err) {
    throw err;
  }
  console.log(obj);
});
