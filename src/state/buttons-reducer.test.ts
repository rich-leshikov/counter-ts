import {v1} from 'uuid';
import {ButtonsArrayType, buttonsReducer} from './buttons-reducer';
import {IncrementCounterAC, ResetCounterAC} from './user-panels-reducer';


test("reset button shouldn't be disabled", () => {
  const userPanelId1 = v1()
  const userPanelId2 = v1()

  let startState: ButtonsArrayType = {
    [userPanelId1]: [
      {buttonId: '0', title: 'set', disabled: true, function: () => {}}
    ],
    [userPanelId2]: [
      {buttonId: '0', title: 'inc', disabled: false, function: () => {}},
      {buttonId: '1', title: 'reset', disabled: true, function: () => {}}
    ]
  }

  const endState = buttonsReducer(startState, IncrementCounterAC(userPanelId2))

  expect(endState[userPanelId2][1].disabled).toBeFalsy()
  expect(endState[userPanelId2].length).toBe(2)
})

test("reset button should be disabled", () => {
  const userPanelId1 = v1()
  const userPanelId2 = v1()

  let startState: ButtonsArrayType = {
    [userPanelId1]: [
      {buttonId: '0', title: 'set', disabled: true, function: () => {}}
    ],
    [userPanelId2]: [
      {buttonId: '0', title: 'inc', disabled: false, function: () => {}},
      {buttonId: '1', title: 'reset', disabled: true, function: () => {}}
    ]
  }

  const endState = buttonsReducer(startState, ResetCounterAC(userPanelId2))

  expect(endState[userPanelId2][1].disabled).toBeTruthy()
  expect(endState[userPanelId2].length).toBe(2)
})