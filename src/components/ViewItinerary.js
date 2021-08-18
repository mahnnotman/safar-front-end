import React, { useEffect, useState } from 'react';

function ViewItinerary(props) {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/itinerary/${props.id}/places`).then(response => 
            response.json().then(data => {
                console.log(data);
                setPlaces(data.places);
            })
        );
    }, [props.id]);

    return (
        <div>
            <ol> 
                {places.map(place => {
                    return (
                        <li key={place.name}>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${place.lat}C${place.lng}&query_place_id=${place.google_place_id}`} target="_blank" rel="noreferrer">{place.name}</a>
                            {console.log(place.place_id)}
                        </li>
                    )
                })}
            </ol>
            <button onClick={() => {props.setViewItin(false)}}>let's go!</button>
        </div>
        )
}

export default ViewItinerary;