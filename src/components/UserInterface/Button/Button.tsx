import s from './Button.module.css'

type ButtonPropsType = {
  userPanelId: string
  onClick: (userPanelId: string) => void
  // userPanelId: string
}

export function Button(props: ButtonPropsType) {
  const onClickButton = () => {
    !props.disabled && props.function(props.userPanelId)
  }

  return (
    <div
      className={props.disabled ? (s.Button + ' ' + s.disabled) : s.Button}
      key={props.buttonId}
      onClick={onClickButton}
    >
      <p>{props.title}</p>
    </div>
  )
}