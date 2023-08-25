import React, { useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, Legend, CartesianGrid } from "recharts";

function CountryDataStatics({ countryData }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Function to handle country selection
  const handleCountrySelect = (countryName) => {
    setSelectedCountry(countryName);
  };

  // Filter data for the selected country
  const filteredCountryData = countryData.find(
    (country) => country.country === selectedCountry
  );

  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center mb-4">
        COVID-19 Cases by Country
      </h2>

      {/* Dropdown to select a country */}
      <select
        className="form-select mb-3"
        onChange={(e) => handleCountrySelect(e.target.value)}
      >
        <option value="">Select a Country</option>
        {countryData.map((country) => (
          <option key={country.country} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>

      <div className="text-center">
        {selectedCountry ? (
          <div className="d-flex justify-content-center">
            <div className="col-md-8">
              <div className="text-center">
                <h3 className="mb-3">
                  COVID-19 Data for {selectedCountry}{" "}
                  <img
                    src={filteredCountryData.countryInfo.flag}
                    alt={`${selectedCountry} Flag`}
                    width={32}
                    height={24}
                  />
                </h3>
              </div>
              <div style={{ marginLeft: "150px" }}>
                <BarChart width={500} height={300} data={[filteredCountryData]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="cases" fill="#0074cc" name="Total Cases" />
                  <Bar dataKey="active" fill="#4ab8b5" name="Active Cases" />
                  <Bar dataKey="deaths" fill="#ff6f61" name="Deaths" />
                  <Bar
                    dataKey="recovered"
                    fill="#ffc658"
                    name="Recovered Cases"
                  />
                </BarChart>
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-5">Please select a country to see statistics.</p>
        )}
      </div>
    </div>
  );
}

export default CountryDataStatics;
