import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name ,population, area, region} = props.country;
    return (
        <div className='country'>
            <h2>country name: {name.common}</h2>
            <p>Population: {population}</p>
            <p>Area: <small>{area}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;