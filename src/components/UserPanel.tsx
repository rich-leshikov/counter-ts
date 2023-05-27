import s from './UserPanel.module.css'
import {Display} from './Display/Display';
import {UserInterface} from './UserInterface/UserInterface';
import {ButtonType, UserPanelType} from '../App';


type UserPanelPropsType = UserPanelType & {
  buttons: Array<ButtonType>
}


export function UserPanel(props: UserPanelPropsType) {
  return (
    <div className={s.Container}>
      <Display displayType={props.displayType} count={props.count}/>
      <UserInterface
        userPanelId={props.id}
        count={props.count}
        buttons={props.buttons}
      />
    </div>
  )
}