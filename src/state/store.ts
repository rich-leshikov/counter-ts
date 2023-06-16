import {combineReducers, legacy_createStore as createStore} from 'redux';
import {userPanelsReducer} from './user-panels-reducer';


const rootReducer = combineReducers({
  userPanels: userPanelsReducer
})

export const store = createStore(rootReducer)


export type AppRootStateType = ReturnType<typeof rootReducer>