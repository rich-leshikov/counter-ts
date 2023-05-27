import {v1} from 'uuid';
import {UserPanelType} from '../App';


const userPanelId1 = v1()
const userPanelId2 = v1()

let initialState: Array<UserPanelType> = [
  {id: userPanelId1, displayType: 'setter', count: 0},
  {id: userPanelId2, displayType: 'counter', count: 0},
]


export const userPanelReducer = (state: Array<UserPanelType> = initialState, action: any): Array<UserPanelType> => {
  switch (action.type) {
    case 'INCREMENT-COUNTER':
      return state.map(up => up.id === action.userPanelId ? { ...up, count: up.count + 1 } : up)
    default:
      return state
  }
}