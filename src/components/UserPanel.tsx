import s from './UserPanel.module.css'
import {Display} from './Display/Display';
import {UserInterface} from './UserInterface/UserInterface';
import {UserPanelType} from '../state/user-panels-reducer';


type UserPanelPropsType = UserPanelType


export function UserPanel(props: UserPanelPropsType) {
  return (
    <div className={s.Container}>
      <Display displayType={props.displayType} count={props.count}/>
      <UserInterface userPanelId={props.id} count={props.count}/>
    </div>
  )
}