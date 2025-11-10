const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory (GB):', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2));
