import {ChangeEvent, FC} from 'react'

import s from './Display.module.css'
import {setMaxValueAC, setStartValueAC} from '../../state/values-setter-reducer'
import {useAppDispatch} from '../../state/store'


type DisplaySetterPropsType = {
  startValue?: number
  maxValue?: number
}


export const DisplaySetter: FC<DisplaySetterPropsType> = ({startValue, maxValue}) => {
  const dispatch = useAppDispatch()

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