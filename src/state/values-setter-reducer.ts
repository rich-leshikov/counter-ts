let initialState: ValuesSetterStateType = {
  startValue: 0,
  maxValue: 0,
  hasError: false
}

// reducer
export const valuesSetterReducer = (state: ValuesSetterStateType = initialState, action: ValuesSetterActionType): ValuesSetterStateType => {
  switch (action.type) {
    case 'VALUES-SETTER/SET-START-VALUE':
      return {
        ...state,
        startValue: action.startValue,
        hasError: state.maxValue <= action.startValue || state.maxValue < 1 || action.startValue < 0
      }
    case 'VALUES-SETTER/SET-MAX-VALUE':
      return {
        ...state,
        maxValue: action.maxValue,
        hasError: action.maxValue <= state.startValue || action.maxValue < 1 || state.startValue < 0
      }
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

export type ValuesSetterStateType = {
  startValue: number
  maxValue: number
  hasError: boolean
}