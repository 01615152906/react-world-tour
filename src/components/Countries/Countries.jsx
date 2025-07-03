
// import React from 'react';

import { useEffect, useState } from "react";
import Country2 from "../Country2/Country2";
// import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {

    const [countries, setCountres] = useState([]);

const [visitedCountries, setVisitedCounteries] = useState ([]);

const [visitedFlags, setVisitedFlags] = useState([])

useEffect(()=> {
    
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
    .then(res => res.json())
    .then(data => setCountres(data))

}, [])

const handleVisitedCountry = country => {

    // console.log('add this to your visited country')
    // console.log(country)

    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCounteries(newVisitedCountries)
}

const handleVisitedFlags = falg =>{

    // console.log('flag addng')

    const newVisitedFlags = [...visitedFlags, falg]
    setVisitedFlags(newVisitedFlags);
}

// remove item from an array in a state 
// use filter to elements except the one you want to remove 


    return (

        <div >
            <h3>Countries:{countries.length}</h3>

{/* (number 1)
            {

                countries.map(country => <Country key={country}  country={country} ></Country>)
            } */}
{/* visited country */}

<div>
    <h5>Visited Contries: {visitedCountries.length}</h5>
    <ul>
{
    visitedCountries.map(country => <li key={country.name.common}>{country.name.common}</li>)
}
    </ul>
</div>



            <div className="flag-container">
                {visitedFlags.map((flag, index) => (
                    <img key={index} src={flag} alt="flag" />
                ))}
            </div>



{/*disply countres  */}


<div className="country-container">
    
{

countries.map(country => <Country2
key={country.name.common}
handleVisitedCountry ={handleVisitedCountry}
handleVisitedFlags = {handleVisitedFlags}
     country2={country} ></Country2>)

}

</div>



        </div>
    );
};

export default Countries;