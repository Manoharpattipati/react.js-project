import { combineReducers, createStore } from 'redux'

// Define the initial state of the root
const initialState = {
  data: 'Initial Data',
}

interface Action {
  type: string
  payload?: any
}

// Reducer function to handle actions
function rootReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      return { ...state, data: action.payload }
    default:
      return state
  }
}

// Create and export the store
const store = createStore(rootReducer)

export interface RootState {
  data: string
}

export default store
