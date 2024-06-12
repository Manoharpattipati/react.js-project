import { Reducer } from 'redux'

interface DataState {
  data: string
  error?: string
}

interface Action {
  type: string
  payload?: any
}

const initialState: DataState = {
  data: '',
  error: undefined,
}

const dataReducer: Reducer<DataState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: undefined,
      }
    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default dataReducer
