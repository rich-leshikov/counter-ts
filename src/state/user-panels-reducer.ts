// state
export const userPanelId1 = 'userPanelId1'
export const userPanelId2 = 'userPanelId2'

let initialState: Array<UserPanelType> = [
  {id: userPanelId1, userPanelType: 'setter'},
  {id: userPanelId2, userPanelType: 'counter', count: 0, startValue: 0, maxValue: 0}
]

// reducer
export const userPanelsReducer = (state: Array<UserPanelType> = initialState, action: ActionType): Array<UserPanelType> => {
  switch (action.type) {
    case 'INCREMENT-COUNTER':
      return state.map(up => up.count === 0 ? {...up, count: up.count + 1} : up)
    case 'RESET-COUNTER':
      return state.map(up => up.count === 0 ? {...up, count: up.startValue} : up)
    case 'SET-START-VALUE':
      return state.map(up => up.startValue === 0 ? {
        ...up,
        startValue: action.startValue
      } : up)
    case 'SET-MAX-VALUE':
      return state.map(up => up.maxValue === 0 ? {...up, maxValue: action.maxValue} : up)
    default:
      return state
  }
}

// actions
export const incrementCounterAC = () => ({type: 'INCREMENT-COUNTER'} as const)
export const resetCounterAC = () => ({type: 'RESET-COUNTER'} as const)
export const setStartValue = (startValue: number) => ({type: 'SET-START-VALUE', startValue} as const)
export const setMaxValue = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)

// types
export type IncrementCounterType = ReturnType<typeof incrementCounterAC>
export type ResetCounterType = ReturnType<typeof resetCounterAC>
export type ResetStartValueType = ReturnType<typeof setStartValue>
export type ResetMaxValueType = ReturnType<typeof setMaxValue>
export type ActionType =
  | IncrementCounterType
  | ResetCounterType
  | ResetStartValueType
  | ResetMaxValueType

export type userPanelType = 'setter' | 'counter'
export type UserPanelType = {
  id: string
  userPanelType: userPanelType
  count?: number
  startValue?: number
  maxValue?: number
}
