import React, { useState } from "react";
import "./Country.css";
const Country = ({ country , handleVisitedCountries  }) => {
  const [visited, setVisited] = useState(0);
  // console.log(country.area.area)
//   console.log(handleVisitedCountries)
console.log
  const handleVisited = () => {
    // if(visited){
    //     setVisited(false)
    // }else{
    //     setVisited(true)
    // }setVisited
    //second system
    // setVisited(visited? false : true)
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt="country.flags.flags.alt" />
      <h3>Name : {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}
        {country.area.area > 300000 ? "Big country" : "Small country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "not visisted"}
      </button>
    </div>
  );
};

export default Country;
