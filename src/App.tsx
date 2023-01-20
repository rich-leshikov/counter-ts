import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Counter} from './components/Counter';

export type ButtonType = {
  id: string
  title: string
  disabled: boolean
  function: () => void
}

function App() {
  const [count, setCount] = useState(0)
  const [buttons, setButtons] = useState<Array<ButtonType>>([
    {id: v1(), title: 'inc', disabled: false, function: incrementCounter},
    {id: v1(), title: 'reset', disabled: true, function: resetCounter},
  ])

  function incrementCounter() {
    setCount(count => count + 1)
    if (count === 5) {
      buttons[0].disabled = true
    }
    buttons[1].disabled = false
    setButtons([...buttons])
  }

  function resetCounter() {
    setCount(0)
    buttons[1].disabled = true
    setButtons([...buttons])
  }

  return (
    <div className="App">
      <Counter
        count={count}
        buttons={buttons}
      />
    </div>
  );
}

export default App;
