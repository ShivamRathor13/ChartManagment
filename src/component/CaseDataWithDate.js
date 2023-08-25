import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function CaseDataWithDate({ dateData }) {
  // Extract dates and values for cases, deaths, and recoveries
  const dates = Object.keys(dateData.cases);
  const cases = Object.values(dateData.cases);
  const deaths = Object.values(dateData.deaths);
  const recovered = Object.values(dateData.recovered);

  const chartData = dates.map((date, index) => ({
    date,
    cases: cases[index],
    deaths: deaths[index],
    recovered: recovered[index],
  }));

  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center mb-4">
        COVID-19 Cases Over Time
      </h2>
      <div className="text-center">
        <LineChart
          width={window.innerWidth > 768 ? 800 : 300}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" name="Cases" stroke="#0074cc" />
          <Line
            type="monotone"
            dataKey="deaths"
            name="Deaths"
            stroke="#ff6f61"
          />
          <Line
            type="monotone"
            dataKey="recovered"
            name="Recovered"
            stroke="#ffc658"
          />
        </LineChart>
      </div>
    </div>
  );
}

export default CaseDataWithDate;
