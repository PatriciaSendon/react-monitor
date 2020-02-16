const axios = require('axios');

const ServiceApi = {
  getEstatisticasDiarias() {
    return axios.get('/estatisticasdiariastotal')
    .then(res=> {return res.data})
    
    
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
