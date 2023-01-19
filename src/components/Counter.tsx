import React from 'react';
import s from './Counter.module.css'
import {Display} from './Display/Display';
import {UserInterface} from './UserInterface/UserInterface';

type CounterPropsType = {
  buttonTitles: Array<string>
}

export function Counter(props: CounterPropsType) {
  return (
    <div className={s.Container}>
      <Display/>
      <UserInterface buttonTitles={props.buttonTitles}/>
    </div>
  );
}