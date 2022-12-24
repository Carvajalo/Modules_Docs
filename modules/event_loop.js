const http = require("http");

const serv = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to the server");
  }
  if (req.url === "/about") {
    return res.end("About page");
  }
  res.end("<h1>Not found</h1>");
});

serv.listen(3000);
