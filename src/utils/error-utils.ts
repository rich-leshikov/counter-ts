import {Dispatch} from 'redux'
import {setInfoMessageAC, SetInfoMessageType} from '../state/user-panels-reducer'


// generic function
export const handleInfoMessageError = (hasError: boolean, dispatch: ErrorUtilsDispatchType) => {
  if (hasError) {
    dispatch(setInfoMessageAC('incorrect value!'))
  } else {
    dispatch(setInfoMessageAC(`enter values and press 'set'`))
  }
}


type ErrorUtilsDispatchType = Dispatch<SetInfoMessageType>