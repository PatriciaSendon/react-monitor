import ApiService from './ServiceApi';

const PrepareCardData = async () => {
  const data = await ApiService.getEstatisticasDiarias();

  let teste = [
    {
      value: data.data.total,
      color: '#a08365',
      type: 'mail',
      header: 'Total'
    },
    {
      value: data.data.waitSend,
      color: '#8a6dd5',
      type: 'clock-circle',
      header: 'Aguardando Envio'
    },
    {
      value: data.data.waitDelivery,
      color: '#8a6dd5',
      type: 'clock-circle',
      header: 'Aguardando Entrega'
    },
    {
      value: data.data.Delivered,
      color: '#1ABC9C',
      type: 'check',
      header: 'Entregues'
    },
    {
      value: data.data.bounce,
      color: '#FF0000',
      iconClass: 'fa fa-exclamation-triangle',
      header: 'Bounce Sofridos'
    },
    {
      value: data.data.Suprimido,
      color: '#ffb400',
      type: 'alert',
      header: 'Bounce Evitados'
    }
  ];

  console.log('dp', teste);
  return teste;
};

export default PrepareCardData;
