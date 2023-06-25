import s from './Display.module.css'
import {DisplayCounter} from './DisplayCounter';
import {DisplaySetter} from './DisplaySetter';
import {PanelType} from '../../state/user-panels-reducer';


type DisplayPropsType = {
  userPanelType: PanelType
  count?: number
  startValue?: number
  maxValue?: number
}


export function Display(props: DisplayPropsType) {
  return (
    <div className={s.Display}>
      {props.userPanelType === 'setter' && <DisplaySetter/>}
      {props.userPanelType === 'counter' && <DisplayCounter count={props.count}/>}
    </div>
  )
}