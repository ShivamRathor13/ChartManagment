// App.js
import React, { useState, useEffect } from "react";

import Contact from "./component/contatctPage/contact";
import Chart from "./component/chartPage/chart";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import WorldwideStatistics from "./component/WorldWideStatistics";
import CountryDataStatics from "./component/CountryDataStatics";
import CaseDataWithDate from "./component/CaseDataWithDate";

function App() {
  const [worldwideData, setWorldwideData] = useState({});
  const [countryData, setcountryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateData, setdateData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const worldwideResponse = await fetch(
          "https://disease.sh/v3/covid-19/all"
        );
        const worldwideData = await worldwideResponse.json();
        setWorldwideData(worldwideData);

        const countryResponse = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const countryData = await countryResponse.json();
        setcountryData(countryData);

        const historicalResponse = await fetch(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const historicalData = await historicalResponse.json();
        setdateData(historicalData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", fontSize: "44px", margin: "auto" }}>
        Loading...
      </div>
    );
  }
  // console.log(dateData);
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <div className="content">
        {/* <Contact /> */}
        <Sidebar />
        {/* <Routel /> */}
        {/* <Link to="/Contact">contact</Link> */}
        {/* <Contact /> */}
        {/* <Link to="/Contact">Contat</Link> */}
        {/* <WorldwideStatistics worldwideData={worldwideData} /> */}
      </div>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/chart" element={<Chart />} />
        <Route
          path="/Worldwidedata"
          element={<WorldwideStatistics worldwideData={worldwideData} />}
        />
        <Route
          path="/Countrydata"
          element={<CountryDataStatics countryData={countryData} />}
        />
        <Route
          path="/Casedatawithdate"
          element={<CaseDataWithDate dateData={dateData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
