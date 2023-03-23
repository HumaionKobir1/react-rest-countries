import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h1>Country: {countries.length}</h1>
            {
                countries.map(country => console.log(country))
            }
        </div>
    )
};


export default Countries;