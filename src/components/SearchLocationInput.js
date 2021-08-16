import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function SearchLocationInput() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  let [addressToSave, setaddressToSave] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(addressToSave)
    axios
      .post("http://localhost:5000/places", addressToSave)
      .then((response) => {
        console.log('response:', response);
        console.log('response data:', response.data);
      })
      .catch((error) => {
        console.log('error:', error);
        console.log('error response:', error.response);
      });
  }

  useEffect(() => {
    const handleScriptLoad = (updateQuery, autoCompleteRef) => {
      autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
      );
      autoComplete.setFields(["place_id", "geometry", "name"]);
      autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
      );
    }
    const handlePlaceSelect = (updateQuery) => {
      const addressObject = autoComplete.getPlace();
      const query = addressObject.formatted_address;
      updateQuery(query);
      console.log(addressObject);
      let address = {
        google_place_id: addressObject.place_id,
        name: addressObject.name,
        lat: addressObject.geometry.location.lat(),
        lng: addressObject.geometry.location.lng()
      };
      setaddressToSave(address);
    }
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="where to?"
        value={query}
      />
      <button type="wishlist" onClick={handleSubmit}>wishlist</button>
    </div>
  );
}

export default SearchLocationInput;