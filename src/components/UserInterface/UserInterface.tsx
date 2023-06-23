import s from './UserInterface.module.css'
import {Button} from './Button/Button';
import {useDispatch} from 'react-redux';
import {incrementCounterAC, resetCounterAC} from '../../state/user-panels-reducer';


type UserInterfacePropsType = {
  userPanelId: string
  count: number
}


export function UserInterface({userPanelId, count}: UserInterfacePropsType) {
  const dispatch = useDispatch()

  function setMinMaxValues() {
    console.log('1')
  }

  function incrementCounter() {
    dispatch(incrementCounterAC(userPanelId))
  }

  function resetCounter() {
    dispatch(resetCounterAC(userPanelId))
  }

  const setterButtons = userPanelId === 'userPanelId1'
    && <Button title="set" onClick={setMinMaxValues}/>
  const counterButtons = userPanelId === 'userPanelId2' && <>
    <Button title="inc" onClick={incrementCounter}/>
    <Button title="reset" onClick={resetCounter}/>
  </>


  return (
    <div className={s.UserInterface}>
      {setterButtons}
      {counterButtons}
    </div>
  )
}