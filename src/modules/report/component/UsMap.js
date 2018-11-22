import React, { Suspense } from "react";
import { HighchartsCmp } from "../../highcharts";
import styled from "styled-components";
import { fetchUsMap } from "../utils/fetchUsMap";
import { unstable_createResource as createResource } from "react-cache";
import { Loader } from "../../common";

function getMapChartOptions(data) {
  return {
    chart: {
      map: "countries/us/us-all",
      borderWidth: 1
    },

    title: {
      text: "US population density (/km²)"
    },

    exporting: {
      sourceWidth: 600,
      sourceHeight: 500
    },

    legend: {
      layout: "horizontal",
      borderWidth: 0,
      backgroundColor: "rgba(255,255,255,0.85)",
      floating: true,
      verticalAlign: "top",
      y: 25
    },

    mapNavigation: {
      enabled: true
    },

    colorAxis: {
      min: 1,
      type: "logarithmic",
      minColor: "#EEEEFF",
      maxColor: "#000022",
      stops: [[0, "#EFEFFF"], [0.67, "#4444FF"], [1, "#000022"]]
    },

    series: [
      {
        animation: {
          duration: 1000
        },
        data: data,
        joinBy: ["postal-code", "code"],
        dataLabels: {
          enabled: true,
          color: "#FFFFFF",
          format: "{point.code}"
        },
        name: "Population density",
        tooltip: {
          pointFormat: "{point.code}: {point.value}/km²"
        }
      }
    ]
  };
}

const mapChartResource = createResource(fetchUsMap);

const MapChart = () => {
  const chartData = mapChartResource.read();

  return <HighchartsCmp isMap={true} options={getMapChartOptions(chartData)} />;
};

const UsMap = () => {
  return (
    <Wrapper>
      <h3>US Map</h3>
      <Suspense fallback={<Loader />}>
        <MapChart />
      </Suspense>
    </Wrapper>
  );
};

export default UsMap;

const Wrapper = styled.div`
  text-align: center;
`;
