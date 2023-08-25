import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Chart = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Taiyo.AI Chart and Map Section</h1>
      <Nav>
        <Nav.Item>
          <Link to="/Worldwidedata" className="nav-link">
            WorldWideStatics
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Countrydata" className="nav-link">
            CountrySpecificData
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Casedatawithdate" className="nav-link">
            Case date with date
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Chart;
