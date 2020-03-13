const axios = require('axios');

const ServiceApi = {
  getEstatisticasDiarias() {
    // return axios.get('/estatisticasdiariastotal')
    // .then(res=> {return res.data})

    return {"total":"5229","waitSend":"6","waitDelivery":"17","Delivered":"4496","bounce":"4","Suprimido":"706"}
  },

  getEstatisticasPorApp() {
    try {
      return axios.get('/estatisticasdiariasporapp');
    } catch (error) {
      console.error(error);
    }
  }
};

export default ServiceApi;
