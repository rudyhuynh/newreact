import { requestMapGeo } from "../../highcharts";

export async function fetchUsMap() {
  await requestMapGeo("countries/us/us-all");
  await requestMapGeo("countries/us/us-all-all");

  const response = await fetch(
    "https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/us-population-density.json"
  );
  const data = await response.json();

  return data.map(item => ({
    ...item,
    code: item.code.toUpperCase()
  }));
}
