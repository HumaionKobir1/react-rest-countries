import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h2>country name: {props.name}</h2>
            <p>Population: {props.population}</p>
            <p>Area: <small>{props.area}</small></p>
        </div>
    );
};

export default Country;