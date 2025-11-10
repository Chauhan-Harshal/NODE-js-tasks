const fs = require('fs');

fs.appendFile('example.txt', '\nAppended text!', (err) => {
  if (err) throw err;
  console.log('New content added!');
});
