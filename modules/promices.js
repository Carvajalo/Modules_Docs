const { readFile } = require("fs/promises");
const { promisify } = require("util");

/* function getText(pathFile) {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

getText("./data/second.txt")
.then((result) => console.log(result))
.then(() =>
getText("./data/first.txt")
.then((res) => console.log(res))
.catch((error) => console.log(error))
)  .catch((error) => console.log(error));
*/

/* Vuelvo readFile en una promesa si nnecesiada de tanto código (para cuando el require no es /promise): 
const readFilePromise = promisify(readFile); */

//Calculo los readFile que yo quiera
async function read() {
  try {
    /* throw new Error('Esto es un error') */
    const result1 = await readFile("./data/first.txt", "utf-8");
    const result2 = await readFile("./data/second.txt", "utf-8");
    const result3 = await readFile("./data/third.txt", "utf-8");
    console.log(result1);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}

read();
