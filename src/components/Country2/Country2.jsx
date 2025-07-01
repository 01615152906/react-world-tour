
// import React from 'react';
import { useState } from 'react';
import './Country2.css'

const Country2 = ({country2, handleVisitedCountry}) => {

    console.log(country2)


    const {name, flags} = country2;


const [visited, setvisited]  = useState(false);
const handleVisited = () => {
    setvisited(!visited);
}
console.log(handleVisitedCountry)


// const passWithParams = () => handleVisitedCountry(country2)
   


    return (
        <div className={`country2 ${visited ?'visited' : 'non-visited'}`}>
          <h3 style={{color: visited ? 'purple' : 'black'}}>{name.common}</h3>  
         <img src={flags.png} alt="" /> 

         <button onClick={() => handleVisitedCountry(country2)} >Mark Visited</button>
         <br />
       
       <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
       {visited ? ' I have visited this country' : 'I want to visited'}
        </div>
    );
};

export default Country2;