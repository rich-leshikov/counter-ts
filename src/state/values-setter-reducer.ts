let initialState: InitStateType = {
  startValue: 0,
  maxValue: 0
}

// reducer
export const valuesSetterReducer = (state: InitStateType = initialState, action: ValuesSetterActionType): InitStateType => {
  switch (action.type) {
    case 'VALUES-SETTER/SET-START-VALUE':
      return {...state, startValue: action.startValue}
    case 'VALUES-SETTER/SET-MAX-VALUE':
      return {...state, maxValue: action.maxValue}
    default:
      return state
  }
}

// actions
export const setStartValueAC = (startValue: number) => ({type: 'VALUES-SETTER/SET-START-VALUE', startValue} as const)
export const setMaxValueAC = (maxValue: number) => ({type: 'VALUES-SETTER/SET-MAX-VALUE', maxValue} as const)

// types
export type SetStartValueType = ReturnType<typeof setStartValueAC>
export type SetMaxValueType = ReturnType<typeof setMaxValueAC>
export type ValuesSetterActionType =
  | SetStartValueType
  | SetMaxValueType

type InitStateType = {
  startValue: number
  maxValue: number
}