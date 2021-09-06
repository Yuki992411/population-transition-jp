import React from "react";
import "./Graph.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Graph(props) {
  const plot_data = props[Object.keys(props)].map((value) => {
    const popu_data = value.population.map((sub_v) => sub_v.value);
    return {
      name: value.prefName,
      data: popu_data,
      pointStart: value.population[0].year,
      pointInterval: value.population[1].year - value.population[0].year,
    };
  });
  // console.log(plot_data);

  const options = {
    title: {
      text: "",
    },
    chart: {
      backgroundColor: {
        linearGradient: [0, 0, 1, 1],
        stops: [
          [0, "rgb(240, 240, 255)"],
          [1, "rgb(240, 240, 255)"],
        ],
      },
      borderWidth: 1,
      plotBackgroundColor: "rgba(255, 255, 255, .9)",
      plotShadow: true,
      plotBorderWidth: 1,
    },
    yAxis: {
      title: {
        text: "人口数（人）",
      },
      labels: {
        formatter: function () {
          return this.value / 10000 + " 万";
        },
      },
    },
    xAxis: {
      title: {
        text: "年",
      },
    },
    series: plot_data,
  };

  return (
    <div id="graph">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Graph;
