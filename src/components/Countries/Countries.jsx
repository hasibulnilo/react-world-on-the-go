import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedCountriesFlags,setVisitedCountriesFlags] = useState([])
 const handleVisitedCountries = (country) => {
    console.log("handle visited country clicked",country);
    const newVisitedCountries =[...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
  };
  const handleVisitedFlag = (flag) =>{
  const newVisitedFlags = [...visitedCountriesFlags,flag]
  setVisitedCountriesFlags(newVisitedFlags)


  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  // console.log(countries);
  return (
    <div className="visited-flags-container">
      <h1>In the Countries:{countries.length}</h1>
      <h3>Total countery Visited:{visitedCountries.length}</h3>
          <h3>Total flag visisted: {visitedCountriesFlags.length}</h3>
      <div>
            {
            visitedCountriesFlags.map((flag ,index)=> <img key={index} src={flag} alt={flag.alt}></img>  )
          }
      </div>
        {
      
        visitedCountries.map(country => <li key={country.cca3.cca3} >{country.name.common}</li>)


        }
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag} ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
