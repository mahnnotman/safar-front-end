import React, { useState, useEffect } from 'react';

function Itineraries() {
    const [itineraries, setItineraries] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/itinerary").then(response => 
            response.json().then(data => {
                console.log(data)
                setItineraries(data);
            })
        );
    }, []);
    
    return (
        <ul> 
            {itineraries.map(itinerary => {
                return (
                    <li key={itinerary.itinerary_name}>
                        <header>{itinerary.itinerary_name}</header>
                    </li>
                )
            })}
        </ul>
        )
}

export default Itineraries;