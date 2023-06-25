import {combineReducers, legacy_createStore as createStore} from 'redux';
import {UserPanelsActionType, userPanelsReducer} from './user-panels-reducer';
import {ValuesSetterActionType, valuesSetterReducer} from './values-setter-reducer';


const rootReducer = combineReducers({
  userPanels: userPanelsReducer,
  valuesSetter: valuesSetterReducer
})

export const store = createStore(rootReducer)


export type ActionType = UserPanelsActionType | ValuesSetterActionType
export type AppRootStateType = ReturnType<typeof rootReducer>