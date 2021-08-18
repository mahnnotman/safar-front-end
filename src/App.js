import React, { useState} from 'react';
import SearchLocationInput from './components/SearchLocationInput';
import Wishlist from './components/Wishlist';
import Button from './components/Button';
import ItineraryForm from './components/ItineraryForm';
import Itineraries from './components/Itineraries';
import ViewItinerary from './components/ViewItinerary';
import 'normalize.css'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  const [makeItin, setMakeItin] = useState(false);
  const [viewItin, setViewItin] = useState(false);
  const [id, setId] = useState(null);
  
  return (
    <div className="app">
      <header>SAFAR</header>
      <div className="content">
      <main>
        <SearchLocationInput onChange={console.log}/>
        { !makeItin && <Button className="itinerary_button" circular type="button" 
          onClick={ () => setMakeItin(true)}>create itinerary</Button>}
        { makeItin && <ItineraryForm setMakeItin={setMakeItin} /> }
        { !viewItin && <Itineraries setViewItin={setViewItin} setId={setId} /> }
        { viewItin && <ViewItinerary setViewItin={setViewItin} id={id} />}
      </main>
      <aside className="sidebar"><Wishlist /></aside>
      </div>
    </div>
  );
}

export default App;