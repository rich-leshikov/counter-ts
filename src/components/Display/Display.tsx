import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
  count: number
}

export function Display(props: DisplayPropsType) {
  return (
    <div className={s.Display}>
      <p className={props.count === 5 ? s.alert : ''}>{props.count}</p>
    </div>
  );
}