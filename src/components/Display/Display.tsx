import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {

}

export function Display(props: DisplayPropsType) {
  return (
    <div className={s.Display}>
      <p>0</p>
    </div>
  );
}