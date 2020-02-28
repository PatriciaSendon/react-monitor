import PreparTableData from './PreparTableData';
import PrepareCardData from './PreparCardData';

export default async function PreparaData()  {


    let stateModel = {
        card: (await PrepareCardData()).card,
        table: await PreparTableData()
    };

    return stateModel



}
