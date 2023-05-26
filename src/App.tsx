import {useEffect, useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {UserPanel} from './components/UserPanel';


export type DisplayType = 'setter' | 'counter'
export type ButtonType = {
  buttonId: string
  title: string
  disabled: boolean
  function: (userPanelId: string) => void
}
export type ButtonsArrayType = {
  [key: string]: Array<ButtonType>
}
export type UserPanelType = {
  id: string
  DisplayType: DisplayType
  count: number //shouldn't be assigned to setter display type
  buttons: Array<ButtonType>
}


function App() {
  const userPanelId1 = v1()
  const userPanelId2 = v1()

  const [buttons, setButtons] = useState<ButtonsArrayType>({
    [userPanelId1]: [
      {buttonId: v1(), title: 'set', disabled: true, function: setMinMaxValues}
    ],
    [userPanelId2]: [
      {buttonId: v1(), title: 'inc', disabled: false, function: incrementCounter},
      {buttonId: v1(), title: 'reset', disabled: true, function: resetCounter},
    ]
  })

  const [userPanels, setUserPanels] = useState<Array<UserPanelType>>([
    {id: userPanelId1, DisplayType: 'setter', count: 0, buttons: buttons[userPanelId1]},
    {id: userPanelId2, DisplayType: 'counter', count: 0, buttons: buttons[userPanelId2]},
  ])

  const [count, setCount] = useState(0)

  useEffect(() => {
    let counterValue = localStorage.getItem('counterValue')
    if (counterValue) {
      setCount(JSON.parse(counterValue))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(count))
  }, [count])

  function setMinMaxValues(userPanelId: string) {
    console.log('1')
  }

  function incrementCounter(userPanelId: string) {
    setUserPanels([...userPanels, {...userPanels[1], count: userPanels[1].count + 1}])
    setCount(count => count + 1)
    if (userPanels[1].count === 5) {
      // buttons[userPanelId][0].disabled = true
      setButtons({...buttons, [userPanelId]: [...buttons[userPanelId], {...buttons[userPanelId][0], disabled: true}]})
    }
    // buttons[userPanelId][1].disabled = false
    // setButtons({...buttons})
    setButtons({...buttons, [userPanelId]: [...buttons[userPanelId], {...buttons[userPanelId][1], disabled: false}]})
  }

  function resetCounter(userPanelId: string) {
    setUserPanels([...userPanels, {...userPanels[1], count: 0}])
    // buttons[userPanelId][1].disabled = true
    // setButtons({...buttons})
    setButtons({...buttons, [userPanelId]: [...buttons[userPanelId], {...buttons[userPanelId][1], disabled: true}]})
  }

  return (
    <div className="App">
      <div className="container">
        {userPanels.map(p => {
          return (
            <UserPanel key={p.id} id={p.id} DisplayType={p.DisplayType} count={p.count} buttons={p.buttons}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
