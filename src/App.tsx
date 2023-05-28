import {useEffect, useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {UserPanel} from './components/UserPanel';
import {UserPanelType} from './state/user-panels-reducer';
import {ButtonsArrayType} from './state/buttons-reducer';


function App() {
  const userPanelId1 = v1()
  const userPanelId2 = v1()

  const [buttons, setButtons] = useState<ButtonsArrayType>({
    [userPanelId1]: [
      {buttonId: '0', title: 'set', disabled: true, function: setMinMaxValues}
    ],
    [userPanelId2]: [
      {buttonId: '0', title: 'inc', disabled: false, function: incrementCounter},
      {buttonId: '1', title: 'reset', disabled: true, function: resetCounter},
    ]
  })

  const [userPanels, setUserPanels] = useState<Array<UserPanelType>>([
    {id: userPanelId1, displayType: 'setter', count: 0},
    {id: userPanelId2, displayType: 'counter', count: 0}
  ])


  useEffect(() => {
    let counterValue = localStorage.getItem('counterValue')
    if (counterValue) {
      setUserPanels(userPanels.map(up => up.id === userPanels[1].id ? {
        ...up,
        count: Number(JSON.parse(counterValue || '{}'))
      } : up))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(userPanels[1].count))
  }, [userPanels])

  function setMinMaxValues(userPanelId: string) {
    console.log('1')
  }

  function incrementCounter(userPanelId: string) {
    console.log('incrementCounter', userPanels[1].count)
    setUserPanels(userPanels.map(up => up.id === userPanelId ? {...up, count: up.count + 1} : up))
    if (userPanels[1].count === 5) {
      setButtons({
        ...buttons,
        [userPanelId]: buttons[userPanelId].map(b => b.buttonId === '0' ? {...b, disabled: true} : b)
      })
    }
    setButtons({
      ...buttons,
      [userPanelId]: buttons[userPanelId].map(b => b.buttonId === '1' ? {...b, disabled: false} : b)
    })
    console.log('End', userPanels[1].count)
  }

  function resetCounter(userPanelId: string) {
    setUserPanels(userPanels.map(up => up.id === userPanelId ? {...up, count: 0} : up))
    setButtons({
      ...buttons,
      [userPanelId]: buttons[userPanelId].map(b => b.buttonId === '1' ? {...b, disabled: true} : b)
    })
  }

  return (
    <div className="App">
      <div className="container">
        {userPanels.map(p => {
          return (
            <UserPanel key={p.id} id={p.id} displayType={p.displayType} count={p.count} buttons={buttons[p.id]}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
