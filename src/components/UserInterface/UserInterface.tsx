import React from 'react';
import s from './UserInterface.module.css'
import {Button} from './Button/Button';
import {ButtonType} from '../../App';

type UserInterfacePropsType = {
  buttons: Array<ButtonType>
  count: number
}

export function UserInterface(props: UserInterfacePropsType) {
  return (
    <div className={s.UserInterface}>
      {props.buttons.map(b =>
        (<Button id={b.id} title={b.title}
                 disabled={b.title === 'inc' ? props.count === 5 : props.count === 0}
                 buttonFunction={b.function}
        />))}
    </div>
  );
}