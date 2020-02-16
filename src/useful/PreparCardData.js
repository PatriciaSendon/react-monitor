import ServiceApi from './ServiceApi';

const PrepareCardData = async () => {

  const data = await ServiceApi.getEstatisticasDiarias()


  let cardPrepared = [
    {
      value: await await data.total,
      color: '#a08365',
      type: 'mail',
      header: 'Total'
    },
    {
      value: await data.waitSend,
      color: '#8a6dd5',
      type: 'clock-circle',
      header: 'Aguardando Envio'
    },
    {
      value: await data.waitDelivery,
      color: '#22A7F0',
      iconClass: 'fa fa-paper-plane-o',
      header: 'Aguardando Entrega'
    },
    {
      value: await data.Delivered,
      color: '#1ABC9C',
      type: 'check',
      header: 'Entregues'
    },
    {
      value: await data.bounce,
      color: '#FF0000',
      iconClass: 'fa fa-exclamation-triangle',
      header: 'Bounce Sofridos'
    },
    {
      value: await data.Suprimido,
      color: '#ffb400',
      type: 'alert',
      header: 'Bounce Evitados'
    }
  ];
 
  console.log(cardPrepared)

  return cardPrepared;
};

export default PrepareCardData;
