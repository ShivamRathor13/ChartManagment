import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Contact from "./component/contatctPage/contact";
import Chart from "./component/chartPage/chart";
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

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
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
    </div>
  );
}

function HomePage() {
  return (
    <div className="home mt-5" style={{ textAlign: "center" }}>
      <h2>Welcome to Taiyo.Ai Dashboard</h2>
      <p>Click on "Add Contact" or "Charts" to get started.</p>
      <div className="d-flex justify-content-center">
        <Link to="/Contact" className="btn" style={{ color: "blue" }}>
          Add Contact
        </Link>
        <Link to="/chart" className="btn" style={{ color: "blue" }}>
          Charts
        </Link>
      </div>
    </div>
  );
}

export default App;
