import c3 from "c3";
import d3 from "d3";

window.loadChart = function (json) {
const obj = JSON.parse(json);
const columns = obj.data;
const chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: columns
  },
  legend: {
    show: true,
    position: 'inset'
  }
});

};