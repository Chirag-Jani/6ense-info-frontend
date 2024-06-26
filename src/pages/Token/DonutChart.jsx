import Chart from "react-apexcharts";

const DonutChart = () => {
  const options = {
    series: [5, 10, 10, 10, 25, 10, 20,10],
    chart: {
      type: "donut",
    },
    labels: [
      "5% Creator",
      "10% Marketing",
      "10% Catalyst Network",
      "10% Team",
      "25% DeX Liquidity",
      "10% Future Allocation and Special Projects",
      "20% Rewards",
      "10% Planto group"
    ],

    legend: {
      // display: false,
      position: "bottom",
    },
    // tooltip: {
    //   y: {
    //     formatter: function (val) {
    //       return val;
    //     },
    //   },
    // },
  };

  return (
    <div id="chart">
      <Chart
        options={options}
        series={options.series}
        type="donut"
        height={480}
      />
    </div>
  );
};

export default DonutChart;
