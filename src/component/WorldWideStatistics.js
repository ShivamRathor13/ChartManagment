import React from "react";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const WorldwideStatistics = ({ worldwideData }) => {
  const data = [
    { name: "Total Cases", value: worldwideData.cases },
    { name: "Total Deaths", value: worldwideData.deaths },
    { name: "Total Recovered", value: worldwideData.recovered },
    { name: "Active Cases", value: worldwideData.active },
    { name: "Critical Cases", value: worldwideData.critical },
  ];

  // Data for pie chart (Tests Conducted and Population)
  const pieChartData = [
    { name: "Tests Conducted", value: worldwideData.tests },
    {
      name: "Population",
      value: worldwideData.population,
    },
  ];

  const pieChartColors = ["#0088FE", "#FFBB28"];

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
          marginBottom: "20px",
          color: "#4ab8b5",
        }}
      >
        Worldwide COVID-19 Statistics
      </h2>

      {/* Pie Chart */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h6>Tests Conducted vs. Population</h6>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            data={pieChartData}
            cx={150}
            cy={150}
            outerRadius={120}
            fill="#8884d8"
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`pie-cell-${index}`}
                fill={pieChartColors[index % pieChartColors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Bar Chart */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <BarChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default WorldwideStatistics;
