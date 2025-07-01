
// import React from 'react';

import { useEffect, useState } from "react";
import Country2 from "../Country2/Country2";
// import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {

    const [countries, setCountres] = useState([]);

const [visitedCountries, setVisitedCounteries] = useState ([]);



useEffect(()=> {
    
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
    .then(res => res.json())
    .then(data => setCountres(data))

}, [])

const handleVisitedCountry = country => {

    console.log('add this to your visited country')
    console.log(country)

    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCounteries(newVisitedCountries)
}




    return (

        <div >
            <h3>Countries:{countries.length}</h3>

{/* (number 1)
            {

                countries.map(country => <Country key={country}  country={country} ></Country>)
            } */}


<div>
    <h5>Visited Contries: {visitedCountries.length}</h5>
    <ul>
{
    visitedCountries.map(country => <li>{country.name.common}</li>)
}
    </ul>
</div>


<div className="country-container">
    
{

countries.map(country => <Country2
handleVisitedCountry ={handleVisitedCountry}
     country2={country} ></Country2>)

}

</div>



        </div>
    );
};

export default Countries;