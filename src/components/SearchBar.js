import React, {useState} from 'react';
// import Places from 'google-maps-react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const SearchBar = () => {
    const [place, setPlace] = useState(null);
    return (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="search-bar">What's on your wishlist?</span>
        </label>
        <div>
        <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_API_KEY}
        selectProps={{
            place,
            onChange: setPlace,
          }}
        />
        </div>
        <button type="submit">Submit</button>
        <p>{console.log('this is the place', place)}</p>
    </form>
)};

export default SearchBar;