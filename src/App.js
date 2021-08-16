import React from 'react';
import SearchLocationInput from './components/SearchLocationInput';
import Wishlist from './components/Wishlist';
import CreateItineraryButton from './components/CreateItineraryButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <SearchLocationInput onChange={console.log}/>
      <Wishlist />
      <CreateItineraryButton />
    </div>
  );
}

export default App;