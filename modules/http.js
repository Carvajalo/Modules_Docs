const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);
  if (request.url === "/") {
    response.write("Welcome to de serveer");
    return response.end();
  }
  if (request.url === "/about") {
    response.write("About");
    return response.end();
  }
  response.write(`<h1><strong>404</strong> Not found </h1>`);
  response.end();
});

server.listen(3000);

console.log("Servidor escuchando en el puerto 3000");
