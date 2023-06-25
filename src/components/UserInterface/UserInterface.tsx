import {useSelector} from 'react-redux'

import s from './UserInterface.module.css'
import {Button} from './Button/Button'
import {incrementCounterAC, PanelType, resetCounterAC, setMinMaxValuesAC} from '../../state/user-panels-reducer'
import {AppRootStateType, useAppDispatch} from '../../state/store'
import {ValuesSetterStateType} from '../../state/values-setter-reducer'


type UserInterfacePropsType = {
  userPanelId: string
  panelType: PanelType
  count?: number
}


export function UserInterface(props: UserInterfacePropsType) {
  const tasks = useSelector<AppRootStateType, ValuesSetterStateType>(state => state.valuesSetter)

  const dispatch = useAppDispatch()

  function setMinMaxValues() {
    dispatch(setMinMaxValuesAC(tasks.maxValue, tasks.startValue))
  }

  function incrementCounter() {
    dispatch(incrementCounterAC())
  }

  function resetCounter() {
    dispatch(resetCounterAC())
  }

  const setterButtons = props.panelType === 'setter'
    && <Button title="set" isDisabled={false} onClick={setMinMaxValues}/>
  const counterButtons = props.panelType === 'counter'
    && <>
    <Button title="inc" isDisabled={false} onClick={incrementCounter}/>
    <Button title="reset" isDisabled={false} onClick={resetCounter}/>
  </>


  return (
    <div className={s.UserInterface}>
      {setterButtons}
      {counterButtons}
    </div>
  )
}