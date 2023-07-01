import {FC} from 'react'

import s from './Display.module.css'
import {InfoMessageType} from '../../state/user-panels-reducer'


type DisplayCounterPropsType = {
  infoMessage?: InfoMessageType
  count?: number
  maxValue?: number
}


export const DisplayCounter: FC<DisplayCounterPropsType> = ({infoMessage, count, maxValue}) => {
  const condition = `${!infoMessage && s.counter} ${infoMessage === 'incorrect value!' ? s.alert : ''} 
      ${count === maxValue && !infoMessage ? s.alert : ''}`
  const message = infoMessage ? infoMessage : count

  return (
    <p className={condition}>{message}</p>
  )
}