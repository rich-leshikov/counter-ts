import s from './Display.module.css'
import {DisplayCounter} from './DisplayCounter';
import {DisplaySetter} from './DisplaySetter';
import {DisplayType} from '../../state/user-panels-reducer';


type DisplayPropsType = {
  displayType: DisplayType
  count: number
}


export function Display(props: DisplayPropsType) {
  return (
    <div className={s.Display}>
      {props.displayType === 'setter' && <DisplaySetter/>}
      {props.displayType === 'counter' && <DisplayCounter count={props.count}/>}
    </div>
  )
}