import {FC} from 'react'

import s from './Display.module.css'
import {InfoMessageType} from '../../state/user-panels-reducer'


type DisplayCounterPropsType = {
  infoMessage?: InfoMessageType
  count?: number
  maxValue?: number
}


export const DisplayCounter: FC<DisplayCounterPropsType> = ({infoMessage, count, maxValue}) => {
  return (
    <>
      <p className={`${s.counter} ${count === maxValue ? s.alert : ''}`}>{infoMessage ? infoMessage : count}</p>
    </>
  )
}