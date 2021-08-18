import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItineraryForm(props) {
    const [places, setPlaces] = useState([]);
    const [checkedState, setCheckedState] = useState([]);
    const [itineraryName, setItineraryName] = useState("")

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }
        
    const handleSubmit = (event) => {
        const placeIds = []
            for (let i = 0; i < checkedState.length; i++){
                if (checkedState[i] === true){
                    placeIds.push(places[i].place_id)
                }
            }

        event.preventDefault();
        console.log(checkedState);
        axios
          .post("http://localhost:5000/itinerary/itinerary_with_places", 
          {itinerary_name: itineraryName,
            place_ids: placeIds})
          .then((response) => {
            console.log('response:', response);
            console.log('response data:', response.data);
          })
          .catch((error) => {
            console.log('error:', error);
            console.log('error response:', error.response);
          });
          props.setMakeItin(false);
      }

    useEffect(() => {
        fetch("http://localhost:5000/places").then(response => 
            response.json().then(data => {
                console.log(data)
                setPlaces(data);
                setCheckedState(new Array(data.length).fill(false));
            })
        );
    }, []);
    
    return (
        <form>
            <div>
                    <label>
                        Itinerary Name: <input type="text" onChange={(event) => setItineraryName(event.target.value)}/>
                    </label>
                    <p>What do you want to see?</p>
                    <ul>
                        {places.map(({ name }, index) => {
                            console.log(name);
                        return (
                            <li key={index}>
                            <div>
                                <div className="left-section">
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            </div>
                            </li>
                        );
                        })}
                    </ul>
                    <button type="create itinerary" onClick={handleSubmit}>create itinerary</button>
            </div>
        </form>
        );
}

export default ItineraryForm;