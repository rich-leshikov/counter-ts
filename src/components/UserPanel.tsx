import s from './UserPanel.module.css'
import {Display} from './Display/Display';
import {UserInterface} from './UserInterface/UserInterface';
import {UserPanelType} from '../App';


type UserPanelPropsType = UserPanelType


export function UserPanel(props: UserPanelPropsType) {
  return (
    <div className={s.Container}>
      <Display displayType={props.DisplayType} count={props.count}/>
      <UserInterface
        userPanelId={props.id}
        count={props.count}
        buttons={props.buttons}
      />
    </div>
  )
}