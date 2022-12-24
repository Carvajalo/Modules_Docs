const { writeFile } = require("fs/promises");

const { createReadStream } = require("fs");


async function createBigFile() {
  await writeFile("./data/bigFile.txt", "hello world ".repeat(10000));
}

createBigFile();


const bigFileStream = createReadStream("./data/bigFile.txt", {
  encoding: null,
  highWaterMark: 32
});

bigFileStream.on("data", (chunk) => {
  console.log(chunk);
});

bigFileStream.on("end", () => {
  console.log("ya terminó de leer el archivo");
});

bigFileStream.on("error", (error) => {
  console.log(error);
});
