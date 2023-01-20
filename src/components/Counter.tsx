import React from 'react';
import s from './Counter.module.css'
import {Display} from './Display/Display';
import {UserInterface} from './UserInterface/UserInterface';
import {ButtonType} from '../App';

type CounterPropsType = {
  count: number
  buttons: Array<ButtonType>
}

export function Counter(props: CounterPropsType) {
  return (
    <div className={s.Container}>
      <Display count={props.count}/>
      <UserInterface
        count={props.count}
        buttons={props.buttons}
      />
    </div>
  );
}