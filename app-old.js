const http =  require('http');


http.createServer((req,res )=>{
console.log(req);
    res.write('Hola Mundo');
    res.end();

})
.listen(5500);

console.log('escuchando puerto: ', 5500)