import PrepareCardData from './PreparCardData';

import PreparTable from './PreparTableData';

export default async function(timer, copyState) {
  let data = await setInterval(async () => {
    let stateModel = {
      card: (await PrepareCardData(copyState)).card,
      Table: await PreparTable(copyState)
    };
    console.log('model 5', stateModel);
    return stateModel;
  }, timer);

  console.log('data', data);
  return data;
}
