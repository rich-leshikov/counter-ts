import {ChangeEvent, FC, useEffect} from 'react'

import s from './Display.module.css'
import {setMaxValueAC, setStartValueAC, ValuesSetterStateType} from '../../state/values-setter-reducer'
import {AppRootStateType} from '../../state/store'
import {useDispatch, useSelector} from 'react-redux'
import {handleInfoMessageError} from '../../utils/error-utils'


type DisplaySetterPropsType = {}


export const DisplaySetter: FC<DisplaySetterPropsType> = () => {
  const setterValues = useSelector<AppRootStateType, ValuesSetterStateType>(state => state.valuesSetter)
  const dispatch = useDispatch()

  useEffect(() => handleInfoMessageError(setterValues.hasError, dispatch), [setterValues, dispatch])

  const setMaxValue = (value: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxValueAC(+value.currentTarget.value))
  }

  const setStartValue = (value: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartValueAC(+value.currentTarget.value))
  }

  return (
    <div className={s.setter}>
      <div className={s.row}>
        <p>max value: </p>
        <input type={'number'} value={setterValues.maxValue} onChange={setMaxValue}/>
      </div>
      <div className={s.row}>
        <p>start value: </p>
        <input type={'number'} value={setterValues.startValue} onChange={setStartValue}/>
      </div>
    </div>
  )
}