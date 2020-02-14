const axios = require('axios');

const ApiService = {
  getEstatisticasDiarias() {
    return axios.get('/estatisticasdiariastotal');
  },

  getEstatisticasPorApp() {
    try {
      return axios.get('/estatisticasdiariasporapp');
    } catch (error) {
      console.error(error);
    }
  }
};

export default ApiService;
