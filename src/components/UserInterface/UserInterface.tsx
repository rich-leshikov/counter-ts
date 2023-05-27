import s from './UserInterface.module.css'
import {Button} from './Button/Button';
import {ButtonType} from '../../App';


type UserInterfacePropsType = {
  userPanelId: string
  count: number
  buttons: Array<ButtonType>
}


export function UserInterface(props: UserInterfacePropsType) {
  return (
    <div className={s.UserInterface}>
      {props.buttons.map(b => {
        return (
          <Button
            key={b.buttonId}
            buttonId={b.buttonId}
            userPanelId={props.userPanelId}
            title={b.title}
            disabled={b.title === 'inc' ? props.count === 5 : props.count === 0}
            function={b.function}
          />)
      })}
    </div>
  )
}