import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addPokemon, deletePokemon, filterPokemon} from '../redux/pokemonReducer'
import {useDispatch} from 'react-redux'
import Pokemon from './Pokemon'
import Filter from './Filter'

function Home (props) {
  const [pokeToggle, setPokeToggle] = useState(false)
  
  const dispatch = useDispatch()

  function handleFilter (event) {
    const option = (event.target.value)
    if (option === "All") {
        setPokeToggle(false)
    } else {
        dispatch(filterPokemon(option))
        setPokeToggle(true)
    }
  }
  function addChosen (id) {
    dispatch(addPokemon(id))
  }


  return (
    <div id="home">
      <Filter filter={handleFilter}/>
      <div id="homePokemon">
        {pokeToggle ? props.filteredPokemon.map(x => {
          return <Pokemon  {...x} addChosen={addChosen} key={x._id}/>
        }) : props.pokemon.map(x => {
          return <Pokemon  {...x} addChosen={addChosen} key={x._id}/>
        })}
      </div>
    </div>
  )
}

function mapStateToProps (state){
  console.log(state)
  return {
    pokemon: state.pokemon,
    filteredPokemon: state.filteredPokemon
  }
}

export default connect(mapStateToProps, {addPokemon, deletePokemon})(Home)