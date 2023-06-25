import {
  incrementCounterAC,
  resetCounterAC, changeMaxValueAC, changeStartValueAC,
  userPanelId1,
  userPanelId2,
  userPanelsReducer,
  UserPanelType
} from './user-panels-reducer'


let startState: Array<UserPanelType>

beforeEach(() => {
  startState = [
    {id: userPanelId1, panelType: 'setter'},
    {id: userPanelId2, panelType: 'counter', count: 0, startValue: 0, maxValue: 10}
  ]
})


test('counter of user panel should be changed', () => {
  const endState = userPanelsReducer(startState, incrementCounterAC())

  expect(endState[1].count).toBe(1)
  expect(endState.length).toBe(2)
})

test('counter should be reset to zero', () => {
  const endState = userPanelsReducer(startState, resetCounterAC())

  expect(endState[1].count).toBe(0)
  expect(endState.length).toBe(2)
})

test('start value should be changed', () => {
  const endState = userPanelsReducer(startState, changeStartValueAC(3))

  expect(endState[1].startValue).toBe(3)
  expect(endState[1].count).toBe(3)
  expect(endState.length).toBe(2)
})

test('max value should be changed', () => {
  const endState = userPanelsReducer(startState, changeMaxValueAC(5))

  expect(endState[1].maxValue).toBe(5)
  expect(endState[1].count).toBe(0)
  expect(endState.length).toBe(2)
})