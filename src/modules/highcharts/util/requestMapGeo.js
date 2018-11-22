import Highcharts from "highcharts";

/**
 * Request mapdata and cache it into Highcharts.
 * @param {*} mapPath - Ex: "countries/us/us-all-all" , see public/assets/mapdata
 */
export async function requestMapGeo(mapPath) {
  if (Highcharts.maps[mapPath]) return Highcharts.maps[mapPath];

  const data = await fetch(
    `${process.env.PUBLIC_URL}/assets/mapdata/${mapPath}.geo.json`
  ).then(resp => resp.json());

  return (Highcharts.maps[mapPath] = data);
}
