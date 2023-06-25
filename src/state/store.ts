import {combineReducers, legacy_createStore as createStore} from 'redux';
import {userPanelsReducer} from './user-panels-reducer';
import {valuesSetterReducer} from './values-setter-reducer';


const rootReducer = combineReducers({
  userPanels: userPanelsReducer,
  valuesSetter: valuesSetterReducer
})

export const store = createStore(rootReducer)


export type AppRootStateType = ReturnType<typeof rootReducer>