import {v1} from 'uuid';
import {ActionType} from './user-panels-reducer';


export type ButtonType = {
  buttonId: string
  title: string
  disabled: boolean
  function: (userPanelId: string) => void
}
export type ButtonsArrayType = {
  [key: string]: Array<ButtonType>
}


const userPanelId1 = v1()
const userPanelId2 = v1()

let initialState: ButtonsArrayType = {
  [userPanelId1]: [
    {buttonId: '0', title: 'set', disabled: true, function: () => {}}
  ],
  [userPanelId2]: [
    {buttonId: '0', title: 'inc', disabled: false, function: () => {}},
    {buttonId: '1', title: 'reset', disabled: true, function: () => {}}
  ]
}


export const buttonsReducer = (state: ButtonsArrayType = initialState, action: ActionType): ButtonsArrayType => {
  switch (action.type) {
    case 'INCREMENT-COUNTER':
      // if (userPanels[1].count === 5) {
      //   return {...state, [action.userPanelId]: state[action.userPanelId].map(b => b.buttonId === '0' ? {...b, disabled: true} : b) }
      // }
      return {...state, [action.userPanelId]: state[action.userPanelId].map(b => b.buttonId === '1' ? {...b, disabled: false} : b) }
    case 'RESET-COUNTER':
      return {...state, [action.userPanelId]: state[action.userPanelId].map(b => b.buttonId === '1' ? {...b, disabled: true} : b) }
    default:
      return state
  }
}