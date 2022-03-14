const http = require('http');


http.createServer( (req, res) =>{


    //para que se muestre en el navegador como un json
    res.writeHead(200, { 'Content-Type': 'application/json'})

    const persona = {
        id: 1,
        nombre: 'Fernando'
    }

    /*
    Esto seria si quisieramos sacarlo en csv toda la base de datos o lo almacenado

    res.setHead('Content-Disposition', 'attachmen; filename=lista.csv)
    res.writeHead(200, { 'Content-Type': 'application/csv'})

    res.write('id, nombre\n');
    res.write('1, Fernando\n');
    res.write('2, Maria\n');
    res.write('3, Juan\n');
    res.end();
    */

    res.write('hola mundo');
    res.end();
} )
.listen( 8080 );
console.log('Escuchando el puerto', 8080);