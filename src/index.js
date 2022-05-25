import c3 from "c3";
import d3 from "d3";

window.loadChart = function (json) {
const obj = JSON.parse(json);
const columns = obj.data;
const transition = obj.transition_duration_ms ;
const legend_position = obj.legend_position ;
const chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: columns,
    types:{data_a: "bar"}
  },
  legend: {
    show: true,
    position: legend_position
  },
  transition:{duration: transition} ,
});

};