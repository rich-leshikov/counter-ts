import s from './Button.module.css'
import {ButtonType} from '../../../state/buttons-reducer';

type ButtonPropsType = ButtonType & {
  userPanelId: string
}

export function Button(props: ButtonPropsType) {
  const onClickButton = () => {
    !props.disabled && props.function(props.userPanelId)
  }

  return (
    <div className={props.disabled ? (s.Button + ' ' + s.disabled) : s.Button} key={props.buttonId} onClick={onClickButton}>
      <p>{props.title}</p>
    </div>
  )
}