import s from './Display.module.css'


type DisplayCounterPropsType = {
  count?: number
}


export const DisplayCounter = (props: DisplayCounterPropsType) => {
  return (
    <>
      <p className={`${s.counter} ${props.count === 5 ? s.alert : ''}`}>{props.count}</p>
    </>
  )
}