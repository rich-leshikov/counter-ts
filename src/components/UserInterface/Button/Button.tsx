import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
  id: string
  title: string
  disabled: boolean
  buttonFunction: () => void
}

export function Button(props: ButtonPropsType) {
  const onClickButton = () => {
    !props.disabled && props.buttonFunction()
  }

  return (
    <div className={props.disabled ? (s.Button + ' ' + s.disabled) : s.Button} key={props.id} onClick={onClickButton}>
      <p>{props.title}</p>
    </div>
  );
}