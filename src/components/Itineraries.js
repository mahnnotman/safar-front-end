import React, { useState, useEffect } from 'react';
import './Itineraries.css'

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
        <ul className="wrapper"> 
            {itineraries.map(itinerary => {
                return (
                    <li className="container" key={itinerary.itinerary_name}>
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