const fs = require('fs');
exports.writeData = (file, data) => {
  fs.writeFileSync(file, data);
  console.log('Data written to file.');
};