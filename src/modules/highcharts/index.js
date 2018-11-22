import Highcharts from "highcharts";
import map from "highcharts/modules/map";
import highchartsExport from "highcharts/modules/exporting";
import offlineExporting from "highcharts/modules/offline-exporting";
import highchartsMore from "highcharts/highcharts-more";
import exportData from "highcharts/modules/export-data";
import drilldown from "highcharts/modules/drilldown";
import groupedCategories from "highcharts-grouped-categories";

window.Highcharts = Highcharts;
map(Highcharts);

highchartsExport(Highcharts);
offlineExporting(Highcharts);
highchartsMore(Highcharts);
exportData(Highcharts);
drilldown(Highcharts);
groupedCategories(Highcharts);

export { requestMapGeo } from "./util/requestMapGeo";
export { HighchartsCmp } from "./component/HighchartsCmp";
