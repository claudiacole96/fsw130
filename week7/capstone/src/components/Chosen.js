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
        {props.chosen.length == 0 ? <h1>Go choose your pokemon!</h1> : <h1>Your Pokemon</h1>}
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