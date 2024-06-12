import * as actionTypes from './actiontypes'

type DataType = {
  id: number
  name: string
}

interface FetchDataSuccessAction {
  type: typeof actionTypes.FETCH_DATA_SUCCESS
  payload: DataType[]
}

interface FetchDataErrorAction {
  type: typeof actionTypes.FETCH_DATA_ERROR
  payload: Error
}

export type DataActions = FetchDataSuccessAction | FetchDataErrorAction
