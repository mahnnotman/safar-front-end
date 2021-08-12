import './App.css';
import SearchBar from './components/SearchBar';
import CreateItinerary from './components/CreateItinerary';
import Itinerary from './components/Itineraries';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <div className="App">
      <main className="App-header">
      SAFAR
      </main>
      <SearchBar />
      <CreateItinerary />
      <Itinerary />
      <Wishlist />
    </div>
  );
}

export default App;
