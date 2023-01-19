import React from 'react';
import s from './UserInterface.module.css'
import {Button} from './Button/Button';

type UserInterfacePropsType = {
  buttonTitles: Array<string>
}

export function UserInterface(props: UserInterfacePropsType) {
  return (
    <div className={s.UserInterface}>
      {props.buttonTitles.map(bt => <Button title={bt}/>)}
    </div>
  );
}