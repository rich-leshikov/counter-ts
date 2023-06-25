import {FC} from 'react'

import s from './Display.module.css'


type DisplayCounterPropsType = {
  count?: number
  maxValue?: number
}


export const DisplayCounter: FC<DisplayCounterPropsType> = ({count, maxValue}) => {
  return (
    <>
      <p className={`${s.counter} ${count === maxValue ? s.alert : ''}`}>{count}</p>
    </>
  )
}