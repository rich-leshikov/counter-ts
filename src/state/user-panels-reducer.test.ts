import {v1} from 'uuid';
import {ActionType, IncrementCounterAC, ResetCounterAC, userPanelsReducer, UserPanelType} from './user-panels-reducer';


test('counter of user panel should be changed', () => {
  const userPanelId1 = v1()
  const userPanelId2 = v1()

  let startState: Array<UserPanelType> = [
    {id: userPanelId1, displayType: 'setter', count: 0},
    {id: userPanelId2, displayType: 'counter', count: 0}
  ]

  const action: ActionType = IncrementCounterAC(userPanelId2)

  let endState = userPanelsReducer(startState, action)

  expect(endState[1].count).toBe(1)
  expect(endState.length).toBe(2)
})

test('counter should be reset to zero', () => {
  const userPanelId1 = v1()
  const userPanelId2 = v1()

  let startState: Array<UserPanelType> = [
    {id: userPanelId1, displayType: 'setter', count: 0},
    {id: userPanelId2, displayType: 'counter', count: 0}
  ]

  const action = ResetCounterAC(userPanelId2)

  const endState = userPanelsReducer(startState, action)

  expect(endState[1].count).toBe(0)
  expect(endState.length).toBe(2)
})