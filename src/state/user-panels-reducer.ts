// state
export const userPanelId1 = 'userPanelId1'
export const userPanelId2 = 'userPanelId2'

const initialState: Array<UserPanelType> = [
  {id: userPanelId1, displayType: 'setter', count: 0},
  {id: userPanelId2, displayType: 'counter', count: 0},
]

// reducer
export const userPanelsReducer = (state: Array<UserPanelType> = initialState, action: ActionType): Array<UserPanelType> => {
  switch (action.type) {
    case 'INCREMENT-COUNTER':
      return state.map(up => up.id === action.userPanelId ? {...up, count: up.count + 1} : up)
    case 'RESET-COUNTER':
      return state.map(up => up.id === action.userPanelId ? {...up, count: 0} : up)
    default:
      return state
  }
}

// actions
export const incrementCounterAC = (userPanelId: string) =>
  ({type: 'INCREMENT-COUNTER', userPanelId} as const)
export const resetCounterAC = (userPanelId: string) =>
  ({type: 'RESET-COUNTER', userPanelId} as const)

// types
export type IncrementCounterType = ReturnType<typeof incrementCounterAC>
export type ResetCounterType = ReturnType<typeof resetCounterAC>
export type ActionType =
  | IncrementCounterType
  | ResetCounterType

export type DisplayType = 'setter' | 'counter'
export type UserPanelType = {
  id: string
  displayType: DisplayType
  count: number //shouldn't be assigned to setter display type
}
