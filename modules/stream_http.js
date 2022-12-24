const http = require("http");
const { createReadStream } = require("fs");

/* const { writeFile } = require("fs/promises");

async function createBigFile() {
  await writeFile("./data/bigFile.txt", "hello world".repeat(100000));
}

createBigFile(); */

const server = http.createServer((req, res) => {
  const fileStream = createReadStream("./data/bigFile.txt", {
    encoding: "utf-8",
  });

  fileStream.on("data", (chunk) => {
    fileStream.pipe(res);
  });

  fileStream.on("error", (error) => {
    console.log(error);
  });
});

server.listen(3000);
console.log("server on port: http://localhost:3000");
