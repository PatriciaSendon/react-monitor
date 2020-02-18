import ServiceApi from './ServiceApi';

export default async function(copyState) {
  const responseCard = await ServiceApi.getEstatisticasDiarias();

  let cardPrepared = {
    card: [
      {
        value: await responseCard.total,
        color: '#666',
        type: 'mail',
        header: 'Total'
      },
      {
        value: await responseCard.waitSend,
        color: '#8a6dd5',
        type: 'clock-circle',
        header: 'Aguardando Envio'
      },
      {
        value: await responseCard.waitDelivery,
        color: '#22A7F0',
        iconClass: 'fa fa-paper-plane-o',
        header: 'Aguardando Entrega'
      },
      {
        value: await responseCard.Delivered,
        color: '#1ABC9C',
        type: 'check',
        header: 'Entregues'
      },
      {
        value: await responseCard.bounce,
        color: '#960808',
        iconClass: 'fa fa-exclamation-triangle',
        header: 'Bounce Sofridos'
      },
      {
        value: await responseCard.Suprimido,
        color: '#fd5d00',
        type: 'alert',
        header: 'Bounce Evitados'
      }
    ]
  };

  return cardPrepared;
}
