import {combineReducers, createStore} from 'react-redux'
import  tvShowReducer from "./tvShowReducer"
import movieReducer from './movieReducer'

const rootReducer = combineReducers({
  movieReducer,
  tvShowReducer
})

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

export default store