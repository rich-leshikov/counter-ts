import {incrementCounterAC, resetCounterAC, userPanelsReducer, UserPanelType} from './user-panels-reducer';


let userPanelId1: string
let userPanelId2: string
let startState: Array<UserPanelType>

beforeEach(() => {
  userPanelId1 = 'userPanelId1'
  userPanelId1 = 'userPanelId2'

  startState = [
    {id: userPanelId1, displayType: 'setter', count: 2},
    {id: userPanelId2, displayType: 'counter', count: 0}
  ]
})


test('counter of user panel should be changed', () => {
  let endState = userPanelsReducer(startState, incrementCounterAC(userPanelId2))

  expect(endState[1].count).toBe(1)
  expect(endState.length).toBe(2)
})

test('counter should be reset to zero', () => {
  const endState = userPanelsReducer(startState, resetCounterAC(userPanelId1))

  expect(endState[0].count).toBe(0)
  expect(endState.length).toBe(2)
})