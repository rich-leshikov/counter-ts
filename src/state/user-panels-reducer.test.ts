import {
  incrementCounterAC,
  resetCounterAC,
  userPanelId1,
  userPanelId2,
  userPanelsReducer,
  UserPanelType
} from './user-panels-reducer'


let startState: Array<UserPanelType>

beforeEach(() => {
  startState = [
    {id: userPanelId1, userPanelType: 'setter'},
    {id: userPanelId2, userPanelType: 'counter', count: 0, startValue: 0, maxValue: 10}
  ]
})


test('counter of user panel should be changed', () => {
  const endState = userPanelsReducer(startState, incrementCounterAC())
  // console.log(endState)
  expect(endState[1].count).toBe(1)
  expect(endState.length).toBe(2)
})

test('counter should be reset to zero', () => {
  const endState = userPanelsReducer(startState, resetCounterAC())

  expect(endState[1].count).toBe(0)
  expect(endState.length).toBe(2)
})