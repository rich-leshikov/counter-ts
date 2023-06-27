import s from './Display.module.css'
import {DisplayCounter} from './DisplayCounter';
import {DisplaySetter} from './DisplaySetter';
import {UserPanelType} from '../../state/user-panels-reducer';


type DisplayPropsType = UserPanelType


export function Display(props: DisplayPropsType) {
  return (
    <div className={s.Display}>
      {props.panelType === 'setter' && <DisplaySetter/>}
      {props.panelType === 'counter'
        && <DisplayCounter
          infoMessage={props.infoMessage}
          count={props.count}
          maxValue={props.maxValue}
        />}
    </div>
  )
}