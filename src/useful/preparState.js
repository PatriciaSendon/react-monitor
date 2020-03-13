// import PrepareTableData from './PreparTableData';
import PrepareCardData from './PreparCardData';

export default async function PreparaData() {
  let stateModel = {
    card: (await PrepareCardData()).card,
    table: [{
      "ap_id": 57,
      "ap_name": "Backup",
      "total": "3129",
      "waitSend": "0",
      "waitDelivery": "0",
      "Delivered": "2931",
      "bounce": "0",
      "Suprimido": "198"
    }, {
      "ap_id": 180,
      "ap_name": "GitLab",
      "total": "24",
      "waitSend": "0",
      "waitDelivery": "0",
      "Delivered": "4",
      "bounce": "0",
      "Suprimido": "20"
    }, {
      "ap_id": 116,
      "ap_name": "Corretagem Web",
      "total": "18",
      "waitSend": "1",
      "waitDelivery": "0",
      "Delivered": "13",
      "bounce": "1",
      "Suprimido": "3"
    }, {
      "ap_id": 61,
      "ap_name": "Passaporte - PRD",
      "total": "330",
      "waitSend": "0",
      "waitDelivery": "0",
      "Delivered": "76",
      "bounce": "0",
      "Suprimido": "254"
    }, {
      "ap_id": 40,
      "ap_name": "Karoo Geral",
      "total": "1491",
      "waitSend": "0",
      "waitDelivery": "17",
      "Delivered": "1269",
      "bounce": "3",
      "Suprimido": "202"
    }, {
      "ap_id": 84,
      "ap_name": "Cards - PRD",
      "total": "237",
      "waitSend": "5",
      "waitDelivery": "0",
      "Delivered": "203",
      "bounce": "0",
      "Suprimido": "29"
    }] // await PrepareTableData()
  };

  return stateModel;
}
