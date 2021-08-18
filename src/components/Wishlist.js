import React, { useState, useEffect } from 'react';

function Wishlist({places, setPlaces}) {

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
                        <a href={`https://www.google.com/maps/search/?api=1&query=${place.lat}C${place.lng}&query_place_id=${place.google_place_id}`} target="_blank" rel="noreferrer">{place.name}</a>
                        {console.log(place.place_id)}
                    </li>
                )
            })}
        </ul>
        )
}

export default Wishlist;