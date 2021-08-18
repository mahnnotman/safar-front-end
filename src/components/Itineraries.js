import React, { useState, useEffect } from 'react';

function Itineraries(props) {
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
                        <button onClick={() => {props.setViewItin(true);
                            props.setId(itinerary.itinerary_id)}}>View</button>
                    </li>
                )
            })}
        </ul>
        )
}

export default Itineraries;