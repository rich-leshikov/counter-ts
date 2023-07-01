import {FC} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import s from './UserInterface.module.css'
import {Button} from './Button/Button'
import {incrementCounterAC, resetCounterAC, setMinMaxValuesAC, UserPanelType} from '../../state/user-panels-reducer'
import {AppRootStateType} from '../../state/store'
import {ValuesSetterStateType} from '../../state/values-setter-reducer'


type UserInterfacePropsType = UserPanelType


export const UserInterface: FC<UserInterfacePropsType> = ({panelType, count, maxValue, startValue}) => {
  const tasks = useSelector<AppRootStateType, ValuesSetterStateType>(state => state.valuesSetter)
  const dispatch = useDispatch()

  function setMinMaxValues() {
    dispatch(setMinMaxValuesAC(tasks.maxValue, tasks.startValue))
  }

  function incrementCounter() {
    dispatch(incrementCounterAC())
  }

  function resetCounter() {
    dispatch(resetCounterAC())
  }

  const isSetButtonDisabled = tasks.hasError
  const isIncButtonDisabled = count === maxValue
  const isResetButtonDisabled = count === startValue

  const setterButtons = panelType === 'setter'
    && <Button title="set" isDisabled={isSetButtonDisabled} onClick={setMinMaxValues}/>
  const counterButtons = panelType === 'counter'
    && <>
      <Button title="inc" isDisabled={isIncButtonDisabled} onClick={incrementCounter}/>
      <Button title="reset" isDisabled={isResetButtonDisabled} onClick={resetCounter}/>
    </>

  return (
    <div className={s.UserInterface}>
      {setterButtons}
      {counterButtons}
    </div>
  )
}