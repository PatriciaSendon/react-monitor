import PrepareCardData from './PreparCardData';

import PreparTable from './PreparTableData';

export default async function(timer, copyState) {
  let data = await setInterval(async function() {
    let card = await PrepareCardData(copyState);
    let table = await PreparTable(copyState);

    let stateModel = {
      card: card.card,
      Table: table
    };
    console.log('model 5', stateModel);
    return stateModel;
  }, timer);

  console.log('data', data);
  return data;
}
