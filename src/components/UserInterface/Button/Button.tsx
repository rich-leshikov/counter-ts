import s from './Button.module.css'

type ButtonPropsType = {
  title: string
  onClick: () => void
  // userPanelId: string
}

export function Button(props: ButtonPropsType) {
  const onClickButton = () => {
    // !props.disabled && props.function(props.userPanelId)
    props.onClick()
  }

  return (
    <div
      // className={props.disabled ? (s.Button + ' ' + s.disabled) : s.Button}
      className={s.Button}
      onClick={onClickButton}
    >
      <p>{props.title}</p>
    </div>
  )
}