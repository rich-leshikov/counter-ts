import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {UserPanelsActionType, userPanelsReducer} from './user-panels-reducer';
import {ValuesSetterActionType, valuesSetterReducer} from './values-setter-reducer';
import {useDispatch} from 'react-redux';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'


const rootReducer = combineReducers({
  userPanels: userPanelsReducer,
  valuesSetter: valuesSetterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ActionType = UserPanelsActionType | ValuesSetterActionType
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()