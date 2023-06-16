import {useEffect, useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {UserPanel} from './components/UserPanel';
import {incrementCounterAC, resetCounterAC, UserPanelType} from './state/user-panels-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';


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
        <UserPanel id={userPanels[0].id} displayType={userPanels[0].displayType} count={userPanels[0].count}/>
        <UserPanel id={userPanels[1].id} displayType={userPanels[1].displayType} count={userPanels[1].count}/>
      </div>
    </div>
  )
}

export default App
