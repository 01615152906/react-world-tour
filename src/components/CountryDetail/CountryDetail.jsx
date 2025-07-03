
// import React from 'react';

import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
// const {country2, handleVisitedCountry, handleVisitedFlags} = props;

    return (
        <div>
            <h4>Country Ditail</h4>

            <hr />

            {/* <CountryData 
            
    country2={country2}
handleVisitedCountry={handleVisitedCountry}
handleVisitedFlags={handleVisitedFlags}
            >
            </CountryData> */}
<CountryData
{...props}

>


</CountryData>

        </div>
    );
};

export default CountryDetail;