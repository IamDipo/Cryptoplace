import React, { useEffect, useState } from "react";
import "./LineChart.css";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (!historicalData?.prices) return;

    const dataCopy = [
      ["Date", "Prices"],
      ...historicalData.prices.map((item) => [
        new Date(item[0]), 
        item[1],
      ]),
    ];

    setData(dataCopy);
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="100%"
      data={data}
      options={{
        hAxis: {
          format: "MMM d",
          slantedText: false,
          maxTextLines: 1,
          showTextEvery: 2,
        },
        vAxis: {
          gridlines: { color: "#eee" },
        },
        legend: "none",
        chartArea: {
          width: "85%",
          height: "70%",
        },
      }}
    />
  );
};

export default LineChart;

