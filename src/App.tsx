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
  displayType: DisplayType
  count: number //shouldn't be assigned to setter display type
}


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
    {id: userPanelId2, displayType: 'counter', count: 0},
  ])

  // const [count, setCount] = useState(0)

  useEffect(() => {
    let counterValue = localStorage.getItem('counterValue')
    if (counterValue) {
      // setCount(JSON.parse(counterValue))
      setUserPanels(userPanels.map(up => up.id === userPanels[1].id ? { ...up, count: Number(JSON.parse(counterValue || '{}')) } : up))
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
    // setUserPanels([...userPanels, {...userPanels[1], count: userPanels[1].count + 1}])
    setUserPanels(userPanels.map(up => up.id === userPanelId ? { ...up, count: up.count + 1 } : up))
    // setCount(count => count + 1)
    if (userPanels[1].count === 5) {
      // buttons[userPanelId][0].disabled = true
      // setButtons({...buttons, [userPanelId]: [...buttons[userPanelId], {...buttons[userPanelId][0], disabled: true}]})
      setButtons({...buttons, [userPanelId]: buttons[userPanelId].map(b => b.buttonId === '0' ? {...b, disabled: true} : b) })
    }
    // buttons[userPanelId][1].disabled = false
    // setButtons({...buttons})
    // setButtons({...buttons, [userPanelId]: [...buttons[userPanelId], {...buttons[userPanelId][1], disabled: false}]})
    setButtons({...buttons, [userPanelId]: buttons[userPanelId].map(b => b.buttonId === '1' ? {...b, disabled: false} : b) })
    console.log('End', userPanels[1].count)
  }

  function resetCounter(userPanelId: string) {
    // setUserPanels([...userPanels, {...userPanels[1], count: 0}])
    // buttons[userPanelId][1].disabled = true
    // setButtons({...buttons})
    // setButtons({...buttons, [userPanelId]: [...buttons[userPanelId], {...buttons[userPanelId][1], disabled: true}]})
    setUserPanels(userPanels.map(up => up.id === userPanelId ? { ...up, count: 0 } : up))
    setButtons({...buttons, [userPanelId]: buttons[userPanelId].map(b => b.buttonId === '1' ? {...b, disabled: true} : b) })
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
