import c3 from "c3";
import d3 from "d3";

window.loadChart = function (json) {
const obj = JSON.parse(json);
const array = obj.data;
console.log (array);
const type = obj.type;
const chart = c3.generate({
  bindto: '#chart',
  data: {
    type: type,
    json: array,
    keys:{value:["fieldData.number1", "fieldData.number2"]},
    names: {"fieldData.number1": "my label 1", "fieldData.number2": "my label 2" }
  },
  legend: {
    show: true,
    position: 'inset'
  }
});

};