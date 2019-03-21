const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c626ef56d805e1d7cba9d1cf5c3c99ae`);

    return resp.data.main.temp;

}


module.exports = {
    getClima

}