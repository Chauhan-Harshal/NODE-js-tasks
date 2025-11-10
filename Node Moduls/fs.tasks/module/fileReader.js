const fs = require('fs');
exports.readData = (file) => {
  if (fs.existsSync(file)) {
    return fs.readFileSync(file, 'utf8');
  } else {
    return 'File not found.';
  }
};