const fs = require("fs");

fs.readFile("./dataa/third.txt", 'utf-8', (error, data) => {
  if (error) {
    return console.log(error);
  }
  return console.log(data.toString());
});
