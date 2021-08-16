import React from 'react';
import SearchLocationInput from './components/SearchLocationInput';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">SAFAR
      </header>
      <SearchLocationInput onChange={console.log} />
    </div>
  );
}

export default App;