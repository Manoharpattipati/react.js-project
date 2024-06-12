import { combineReducers } from '@reduxjs/toolkit'
import someReducer from './somereducer' // Ensure this file exists

const rootReducer = combineReducers({
  someFeature: someReducer,
})

export default rootReducer
