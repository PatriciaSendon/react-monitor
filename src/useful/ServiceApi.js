const axios = require('axios');

// const ServiceApi = {
//   AtualizaCard: async () => {
//     const response = await fetch(
//       'http://172.16.72.181:3001/estatisticasdiariasporapp',
//       { mode: 'no-cors' }
//     );

//     return response.text().then(text => (text ? JSON.parse(text) : 'batata'));
//   },

//   AtualizaTabela: async () => {
//     const response = await fetch('http://localhost:8000/tabela');
//     return response.json;
//   }
// };

// export default ServiceApi;

async function getUser() {
  try {
    const response = await axios.get(
      'http://172.16.72.181:3001/estatisticasdiariasporapp',
      { mode: 'no-cors' }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default getUser;
