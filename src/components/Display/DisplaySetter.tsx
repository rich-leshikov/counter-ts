import s from './Display.module.css'


type DisplaySetterPropsType = {
}


export function DisplaySetter(props: DisplaySetterPropsType) {
  return (
    <div className={s.setter}>
      <div className={s.row}>
        <p>max value: </p>
        <input type={'number'}/>
      </div>
      <div className={s.row}>
        <p>start value: </p>
        <input type={'number'}/>
      </div>
    </div>
  )
}