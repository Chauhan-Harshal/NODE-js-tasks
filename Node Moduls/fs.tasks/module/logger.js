const fs = require('fs');

exports.log = (message) => {
  console.log(message);
  fs.appendFileSync('log.txt', message + '\n');
};