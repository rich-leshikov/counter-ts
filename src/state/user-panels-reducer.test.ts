import {UserPanelType} from '../App';
import {v1} from 'uuid';
import {userPanelReducer} from './user-panels-reducer';


test('counter of user panel should be changed', () => {
  const userPanelId1 = v1()
  const userPanelId2 = v1()

  let startState: Array<UserPanelType> = [
    {id: userPanelId1, displayType: 'setter', count: 0},
    {id: userPanelId2, displayType: 'counter', count: 0}
  ]

  const action = {
    type: 'INCREMENT-COUNTER',
    userPanelId: userPanelId2
  }

  const endState = userPanelReducer(startState, action)

  expect(endState[1].count).toBe(1)
})