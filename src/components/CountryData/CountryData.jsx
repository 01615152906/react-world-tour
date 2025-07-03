// import React from 'react';

const CountryData = ({country2, handleVisitedCountry, handleVisitedFlags}) => {

console.log('inside country data', country2, handleVisitedCountry, handleVisitedFlags)

    return (
        <div>
            <p><small>Country Data: {country2.name.common} </small></p>


        </div>
    );
};

export default CountryData;