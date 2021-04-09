import React from 'react'


function ChosenPokemon (props) {
  return (
    <div id={props._id}>
      <h3>{props.name}</h3>
      <img src={props.image} alt="description"/>
      <h5>{props.type}</h5>
      <h4>{props.gen}</h4>
      <h4>Attacks: {props.attacks}</h4>
      <button onClick={() => props.deletePokemon(props._id)}>Delete</button>
    </div>
  )
}

export default ChosenPokemon