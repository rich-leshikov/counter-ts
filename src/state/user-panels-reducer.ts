import {v1} from 'uuid';


export type DisplayType = 'setter' | 'counter'
export type UserPanelType = {
  id: string
  displayType: DisplayType
  count: number //shouldn't be assigned to setter display type
}

type IncrementCounterType = {
  type: 'INCREMENT-COUNTER'
  userPanelId: string
}
type ResetCounterType = {
  type: 'RESET-COUNTER'
  userPanelId: string
}
export type ActionType = IncrementCounterType
  | ResetCounterType


export const userPanelId1 = v1()
export const userPanelId2 = v1()

let initialState: Array<UserPanelType> = [
  {id: userPanelId1, displayType: 'setter', count: 0},
  {id: userPanelId2, displayType: 'counter', count: 0},
]


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


export const IncrementCounterAC = (userPanelId: string): IncrementCounterType => {
  return {
    type: 'INCREMENT-COUNTER',
    userPanelId
  }
}
export const ResetCounterAC = (userPanelId: string): ResetCounterType => {
  return {
    type: 'RESET-COUNTER',
    userPanelId
  }
}