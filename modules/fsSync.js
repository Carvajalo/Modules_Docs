const fs = require("fs");


//Leer un archivo
const first = fs.readFileSync("./data/first.txt", "utf-8"); 
const second = fs.readFileSync("./data/second.txt");

//Crear un archivo
fs.writeFileSync("./data/third.txt", 'hellow world creado como third.txt')

//Modificar un archivo
fs.writeFileSync("./data/third.txt", " modificando", {
    flag: 'a'
})

const third = fs.readFileSync("./data/third.txt", "utf-8")

console.log(first);
console.log(second.toString());
console.log(third);
module.exports = fs;
