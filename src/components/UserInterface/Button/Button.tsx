import s from './Button.module.css'

type ButtonPropsType = {
  title: string
  isDisabled: boolean
  onClick: () => void
}

export function Button(props: ButtonPropsType) {
  const onClickButton = () => {
    !props.isDisabled && props.onClick()
  }

  return (
    <div
      className={props.isDisabled ? (s.Button + ' ' + s.disabled) : s.Button}
      onClick={onClickButton}
    >
      <p>{props.title}</p>
    </div>
  )
}