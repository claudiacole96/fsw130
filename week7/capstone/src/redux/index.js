import {createStore} from 'redux'
import {pokemonReducer} from './pokemonReducer'

const store = createStore(pokemonReducer)
store.subscribe(() => console.log(store.getState()))

export default store