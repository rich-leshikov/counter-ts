import s from './Display.module.css'
import {DisplayType} from '../../App';
import {DisplayCounter} from './DisplayCounter';
import {DisplaySetter} from './DisplaySetter';


type DisplayPropsType = {
  displayType: DisplayType
  count: number
}


export function Display(props: DisplayPropsType) {
  return (
    <div className={s.Display}>
      {props.displayType === 'counter' && <DisplayCounter count={props.count}/>}
      {props.displayType === 'setter' && <DisplaySetter/>}
    </div>
  )
}