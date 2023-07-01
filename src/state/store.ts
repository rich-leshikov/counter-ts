import {combineReducers, legacy_createStore as createStore} from 'redux'

import {UserPanelsActionType, userPanelsReducer} from './user-panels-reducer'
import {ValuesSetterActionType, valuesSetterReducer} from './values-setter-reducer'
import {loadState, saveState} from '../utils/localStorage';


const rootReducer = combineReducers({
  userPanels: userPanelsReducer,
  valuesSetter: valuesSetterReducer
})

export const store = createStore(rootReducer, loadState())
// export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()

store.subscribe(() => {
  saveState({
    userPanels: store.getState().userPanels,
    valuesSetter: store.getState().valuesSetter
  })
})


export type ActionType = UserPanelsActionType | ValuesSetterActionType
export type AppRootStateType = ReturnType<typeof rootReducer>
// export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>


// @ts-ignore
window.store = store