import {useEffect} from 'react'
import {useSelector} from 'react-redux'

import './App.css'
import {UserPanel} from './components/UserPanel'
import {UserPanelType} from './state/user-panels-reducer'
import {AppRootStateType} from './state/store'


function App() {
  const userPanels = useSelector<AppRootStateType, UserPanelType[]>(state => state.userPanels)

  // useEffect(() => {
  //   let counterValue = localStorage.getItem('counterValue')
  //   if (counterValue) {
  //     setUserPanels(userPanels.map(up => up.id === userPanels[1].id ? {
  //       ...up,
  //       count: Number(JSON.parse(counterValue || '{}'))
  //     } : up))
  //   }
  // }, [])
  //
  // useEffect(() => {
  //   localStorage.setItem('counterValue', JSON.stringify(userPanels[1].count))
  // }, [userPanels])



  return (
    <div className="App">
      <div className="container">
        <UserPanel id={userPanels[0].id} panelType={userPanels[0].panelType}/>
        <UserPanel
          id={userPanels[1].id}
          panelType={userPanels[1].panelType}
          infoMessage={userPanels[1].infoMessage}
          count={userPanels[1].count}
          startValue={userPanels[1].startValue}
          maxValue={userPanels[1].maxValue}
        />
      </div>
    </div>
  )
}

export default App
