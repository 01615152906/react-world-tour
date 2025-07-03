
// import React from 'react';
import { useState } from 'react';
import './Country2.css'
import CountryDetail from '../CountryDetail/CountryDetail';


const Country2 = ({country2, handleVisitedCountry, handleVisitedFlags }) => {

    // console.log(country2)


    const {name, flags} = country2;


const [visited, setvisited]  = useState(false);
const handleVisited = () => {
    setvisited(!visited);
}
// console.log(handleVisitedCountry)


// const passWithParams = () => handleVisitedCountry(country2)
   


    return (
        <div className={`country2 ${visited ?'visited' : 'non-visited'}`}>
          <h3 style={{color: visited ? 'purple' : 'black'}}>{name.common}</h3>  
         <img src={flags.png} alt="" /> 

         <button onClick={() => handleVisitedCountry(country2)} >Mark Visited</button>
         <br />
       <button onClick={() => handleVisitedFlags(country2.flags.png)} >add flag</button>

<br />

       <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>



       {visited ? ' I have visited this country' : 'I want to visited'}


<hr />
<CountryDetail
    country2={country2}
handleVisitedCountry={handleVisitedCountry}
handleVisitedFlags={handleVisitedFlags}
>

</CountryDetail>

        </div>
    );
};

export default Country2;