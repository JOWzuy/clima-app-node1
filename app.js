const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad para obtener el clima',
        demand: true

    }


}).argv;

//testeo , async = siempre una promesa. promesa = .then correcto .catch error
/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log); */

/* clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {

    try {

        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temp}.`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;

    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);