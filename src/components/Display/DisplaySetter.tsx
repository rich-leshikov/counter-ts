type DisplaySetterPropsType = {
}


export function DisplaySetter(props: DisplaySetterPropsType) {
  return (
    <>
      <div>
        <p>max value: </p>
        <input type={'number'}/>
      </div>
      <div>
        <p>start value: </p>
        <input type={'number'}/>
      </div>
    </>
  )
}