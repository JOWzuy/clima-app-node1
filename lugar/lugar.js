const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'X-RapidAPI-Key': '0696cf8df8msh63d4a018d396780p1f9da8jsn1276c27e0081' }
    });
    //await async es una promesa en vez de .then y .catch
    // resp guardo los datos en el objeto resp
    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)

    }
    //Data es un objeto que toma las datos que pedi de la api 
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng

    }
}

module.exports = {
    getLugarLatLng

}