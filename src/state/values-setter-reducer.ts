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
        hasError: state.maxValue <= state.startValue || state.maxValue < 1 || state.startValue < 0
      }
    case 'VALUES-SETTER/SET-MAX-VALUE':
      return {
        ...state,
        maxValue: action.maxValue,
        hasError: state.maxValue <= state.startValue || state.maxValue < 1 || state.startValue < 0
      }
    // case 'VALUES-SETTER/SET-ERROR':
    //   return {...state, hasError: state.maxValue <= state.startValue || state.maxValue < 1 || state.startValue < 0}
    default:
      return state
  }
}

// actions
export const setStartValueAC = (startValue: number) => ({type: 'VALUES-SETTER/SET-START-VALUE', startValue} as const)
export const setMaxValueAC = (maxValue: number) => ({type: 'VALUES-SETTER/SET-MAX-VALUE', maxValue} as const)
// export const setErrorAC = () => ({type: 'VALUES-SETTER/SET-ERROR'} as const)

// types
export type SetStartValueType = ReturnType<typeof setStartValueAC>
export type SetMaxValueType = ReturnType<typeof setMaxValueAC>
// export type SetErrorType = ReturnType<typeof setErrorAC>
export type ValuesSetterActionType =
  | SetStartValueType
  | SetMaxValueType
// | SetErrorType

export type ValuesSetterStateType = {
  startValue: number
  maxValue: number
  hasError: boolean
}