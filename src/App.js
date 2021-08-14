import React from 'react';
import SearchLocationInput from './components/SearchLocationInput';
import './App.css';

function App() {
  return (
    <div className="app">
      <SearchLocationInput onChange={() => null} />
    </div>
  );
}

export default App;