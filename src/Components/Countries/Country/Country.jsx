import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags }) => {
   
    const {name,flags,population,area,cca3} = country;

    const [visited, setVisited] =useState(false);


    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div   className={`country ${visited && 'visited' }`}>
            <h1 style={{color: visited ? 'red' : 'white' }}>Name: {name?.common}</h1>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => {handleVisitedCountry(country) ; 
                 handleVisitedFlags(country.flags.png);}}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button> 
            {visited ?"I have Visited This Country. " : "I want to Visit"}
        </div>
    );
};

export default Country;