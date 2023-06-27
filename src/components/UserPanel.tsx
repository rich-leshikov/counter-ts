import s from './UserPanel.module.css'
import {Display} from './Display/Display'
import {UserInterface} from './UserInterface/UserInterface'
import {UserPanelType} from '../state/user-panels-reducer'


type UserPanelPropsType = UserPanelType


export function UserPanel(props: UserPanelPropsType) {
  return (
    <div className={s.Container}>
      <Display
        id={props.id}
        panelType={props.panelType}
        infoMessage={props.infoMessage}
        count={props.count}
        maxValue={props.maxValue}
      />
      <UserInterface
        id={props.id}
        panelType={props.panelType}
        infoMessage={props.infoMessage}
        count={props.count}
        maxValue={props.maxValue}
        startValue={props.startValue}
      />
    </div>
  )
}