import ServiceApi from './ServiceApi';

export default async function() {
  const responseTable = await ServiceApi.getEstatisticasPorApp();

  function orderPerTotalValue(a, b) {
    return a.total - b.total;
  }

  return responseTable.data.reverse(
    responseTable.data.sort(orderPerTotalValue)
  );
}
