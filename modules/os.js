const os = require('os');

console.log(os.totalmem());

console.table({
    os: os.platform(),
    version: os.release(),
    totalmem: os.totalmem(),
})

