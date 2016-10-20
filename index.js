const fs = require('fs');

function jsonParse(stream, cb) {
  let obj = null;
  let skip = 0;
  let quote = false;
  const type = 
  stream.on('data', data => {
    if (obj === null) {
      if (data[0] === '[') {
        this.obj = [];
      } else {
        this.obj = {};
        skip++;
      }
    }
    for(let i = 0; i< data.length; i++) {
      switch() {
      case '"':
        quote = !quote;
        break;
      case ',':
        break;
      }
      console.log('comma');
    }
    // console.log('data', ''+data);
  });
  stream.on('end', _ => {
    cb(null, obj);
  });
}

function jsonStringify(report, w) {
  return new Promise((resolve, reject) => {
    (function jsonStringifyMe(report, w) {
      let comma = '';
      const type = typeof report;
      switch (type) {
      case 'undefined':
        break;
      case 'boolean':
      case 'string':
      case 'number':
        w(JSON.stringify(report));
        break;
      case 'object':
        if (Buffer.isBuffer(report)) {
          w('{"type":"Buffer","data":[');
          comma = '';
          for (let item of report) {
            w(comma);
            jsonStringifyMe(item, w);
            comma = ',';
          }
          w(']}');
        } else if (Array.isArray(report)) {
          w('[');
          comma = '';
          for (let item of report) {
            w(comma);
            jsonStringifyMe(item, w);
            comma = ',';
          }
          w(']');
        } else {
          w('{');
          comma = '';
          for (let key in report) {
            const val = report[key];
            w(comma);
            w(JSON.stringify(key) + ':');
            jsonStringifyMe(val, w);
            comma = ',';
          }
          w('}');
        }
        break;
      }
      resolve();
    })(report, w);
  });
}

module.exports.parse = jsonParse;
module.exports.stringify = jsonStringify;
