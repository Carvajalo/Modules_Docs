let path = require('path')

//Tiene en cuenta el sistema operativo para poder ejecutar node e esa máquina en específica.
//Por ejemplo, el separador (sep) de Win es "/"

const filePath = path.join('/public', 'dist/src', "styles", "main.css")
console.log(filePath);

console.log(path.basename(filePath)); //Da el basename del archivo
console.log(path.dirname(filePath)); //Da la dirección sin el basename
console.log(path.parse(filePath)); //Da lo mismo que path.dirname pero en JSON y el archivo
console.log(path.resolve('dist')); //Completa el path desde donde está el proyecto




module.export = path;