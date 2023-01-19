import React from 'react';
import './App.css';
import {Counter} from './components/Counter';

function App() {
  const buttonTitles: Array<string> = ['inc', 'reset']

  return (
    <div className="App">
      <Counter buttonTitles={buttonTitles}/>
    </div>
  );
}

export default App;
