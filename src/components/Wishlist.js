import React, { useState, useEffect } from 'react';
import { Header, List } from 'semantic-ui-react';

function Wishlist() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch("https://safarcapstone.herokuapp.com/places").then(response => 
            response.json().then(data => {
                console.log(data)
                setPlaces(data);
            })
        );
    }, []);
    
    return (
        <List> 
            {places.map(place => {
                return (
                    <List.Item key={place.name}>
                        <Header>{place.name}</Header>
                    </List.Item>
                )
            })}
        </List>
        )
}

export default Wishlist;