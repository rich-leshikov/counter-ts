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

  function setMinMaxValues(userPanelId: string) {
    console.log('1')
  }

  function incrementCounter(userPanelId: string) {
    dispatch(incrementCounterAC(userPanelId))
  }

  function resetCounter(userPanelId: string) {
    dispatch(resetCounterAC(userPanelId))
  }

  const setterButtons = userPanelId === 'userPanelId1' && <Button userPanelId={userPanelId} onClick={setMinMaxValues}/>
  const counterButtons = userPanelId === 'userPanelId2' && <>
    <Button userPanelId={userPanelId} onClick={incrementCounter}/>
    <Button userPanelId={userPanelId} onClick={resetCounter}/>
  </>


  return (
    <div className={s.UserInterface}>
      {setterButtons}
      {counterButtons}
    </div>
  )
}