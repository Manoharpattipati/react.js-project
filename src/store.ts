import { createStore, applyMiddleware, Middleware, StoreEnhancer } from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from './rootReducer'

// Directly use thunk without casting
const middlewareEnhancer: StoreEnhancer = applyMiddleware(thunk)
const store = createStore(rootReducer, middlewareEnhancer)

export default store
