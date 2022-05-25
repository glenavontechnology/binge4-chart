import c3 from "c3";
import d3 from "d3";

window.loadChart = function (json) {
const obj = JSON.parse(json);
const columns = obj.data;
const transition = obj.transition_duration_ms ;
const legend_position = obj.legend_position ;
const xaxis = ["Site 1", "Site 2", "Site 3", "Site 4", "Site 5", "Site 6"];
const chart = c3.generate({
  bindto: '#chart',
  data: {
    onclick: function (d) {
      console.log (d);
      const index = d.index;
      const d_name = d.name;
      const d_value = d.value;
      const x_name = xaxis[index];

      const obj = {index,d_name,d_value,x_name}; 
      FileMaker.PerformScript("ChartClick" , JSON.stringify (obj) );
    },
    x: "x",
    columns: columns,
    types:{data_a: "bar"}
  },
  axis: {
    x: {
        type: 'category' // this needed to load string x value
    }},

  legend: {
    show: true,
    position: legend_position
  },
  transition:{duration: transition} ,
});

};