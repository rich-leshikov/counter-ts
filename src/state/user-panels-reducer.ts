// state
export const userPanelId1 = 'userPanelId1'
export const userPanelId2 = 'userPanelId2'

let initialState: Array<UserPanelType> = [
  {id: userPanelId1, panelType: 'setter'},
  {id: userPanelId2, panelType: 'counter', count: 0, startValue: 0, maxValue: 0}
]

// reducer
export const userPanelsReducer = (state: Array<UserPanelType> = initialState, action: UserPanelsActionType): Array<UserPanelType> => {
  switch (action.type) {
    case 'USER-PANELS/INCREMENT-COUNTER':
      return state.map(up => !!up.count || up.count === 0 ? {...up, count: up.count + 1} : up)
    case 'USER-PANELS/RESET-COUNTER':
      return state.map(up => !!up.count || up.count === 0 ? {...up, count: up.startValue} : up)
    case 'USER-PANELS/SET-MIN-MAX-VALUES': {
      if ((!!state[1].startValue || state[1].startValue === 0) && (action.maxValue >= state[1].startValue)) {
        return state.map(up => !!up.maxValue || up.maxValue === 0 ? {
          ...up,
          startValue: action.startValue,
          maxValue: action.maxValue,
          count: action.startValue
        } : up)
      } else return state
    }
    default:
      return state
  }
}

// actions
export const incrementCounterAC = () => ({type: 'USER-PANELS/INCREMENT-COUNTER'} as const)
export const resetCounterAC = () => ({type: 'USER-PANELS/RESET-COUNTER'} as const)
export const setMinMaxValuesAC = (maxValue: number, startValue: number) => ({
  type: 'USER-PANELS/SET-MIN-MAX-VALUES',
  maxValue,
  startValue
} as const)

// types
export type IncrementCounterType = ReturnType<typeof incrementCounterAC>
export type ResetCounterType = ReturnType<typeof resetCounterAC>
export type SetMinMaxValuesType = ReturnType<typeof setMinMaxValuesAC>
export type UserPanelsActionType =
  | IncrementCounterType
  | ResetCounterType
  | SetMinMaxValuesType

export type PanelType = 'setter' | 'counter'
export type UserPanelType = {
  id: string
  panelType: PanelType
  count?: number
  startValue?: number
  maxValue?: number
}
