import React from 'react'
import {addPokemon, deletePokemon} from '../redux/pokemonReducer'
import ChosenPokemon from './ChosenPokemon'
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useState} from 'react'

function Chosen (props){
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  function delPoke (id) {
    dispatch(deletePokemon(id))
    setToggle(!toggle)
  }

  return (
    <div id='chosen'>
      <div id='chosenHeader'>
        {props.chosen.length == 0 ? <h1>Your cart is empty! Don't miss out on the deals!!</h1> : <h1>The amazing deals you're getting TODAY!</h1>}
      </div>
     
      <div id='chosenCost'>
        {props.chosen.length == 0 ? "" : <h3>Your Total: ${props.chosen.reduce((sum, pokemon) => {
        return sum + pokemon.cost
        }, 0)}</h3>}
      </div>
      <div id='chosenPokemon'>
        {props.chosen.map(x => <ChosenPokemon {...x} key = {x._id} deletePokemon={delPoke}/>)}
      </div>
      
    </div>
  )
}

function mapStateToProps (state){
  return {
    pokemon: state.pokemon,
    chosen: state.chosen
  }
}

export default connect(mapStateToProps, {addPokemon, deletePokemon})(Chosen)