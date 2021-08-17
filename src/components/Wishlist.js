import React, { useState, useEffect } from 'react';

function Wishlist() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/places").then(response => 
            response.json().then(data => {
                console.log(data)
                setPlaces(data);
            })
        );
    }, []);
    
    return (
        <ul> 
            {places.map(place => {
                return (
                    <li key={place.name}>
                        <header>{place.name}</header>
                    </li>
                )
            })}
        </ul>
        )
}

export default Wishlist;