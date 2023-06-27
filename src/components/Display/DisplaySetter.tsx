import {ChangeEvent, FC} from 'react'

import s from './Display.module.css'
import {setMaxValueAC, setStartValueAC, ValuesSetterStateType} from '../../state/values-setter-reducer'
import {AppRootStateType, useAppDispatch} from '../../state/store'
import {setInfoMessageAC} from '../../state/user-panels-reducer';
import {useSelector} from 'react-redux';


type DisplaySetterPropsType = {
  startValue?: number
  maxValue?: number
}


export const DisplaySetter: FC<DisplaySetterPropsType> = ({startValue, maxValue}) => {
  const tasks = useSelector<AppRootStateType, ValuesSetterStateType>(state => state.valuesSetter)
  const dispatch = useAppDispatch()

  const setMaxValue = (value: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxValueAC(+value.currentTarget.value))
    if (tasks.hasError) {
      dispatch(setInfoMessageAC(`enter values and press 'set'`))
    } else {
      dispatch(setInfoMessageAC('incorrect value!'))
    }
  }

  const setStartValue = (value: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartValueAC(+value.currentTarget.value))
    if (tasks.hasError) {
      dispatch(setInfoMessageAC(`enter values and press 'set'`))
    } else {
      dispatch(setInfoMessageAC('incorrect value!'))
    }
  }

  return (
    <div className={s.setter}>
      <div className={s.row}>
        <p>max value: </p>
        <input
          type={'number'}
          value={maxValue}
          onChange={setMaxValue}
        />
      </div>
      <div className={s.row}>
        <p>start value: </p>
        <input
          type={'number'}
          value={startValue}
          onChange={setStartValue}
        />
      </div>
    </div>
  )
}