import React from 'react'
import {useState} from 'react'

function Filter (props) {
  const [option, setOption] = useState([])

  function handleChange () {
    const filterDrop = document.getElementById('filterDrop')
    console.log(filterDrop.value)
    return setOption(filterDrop.value)
  }


  return (
    <div id='filterForm'>
      <form onSubmit={(event) => props.filter(event, option)} >
        <select id='filterDrop' onChange={handleChange}>
          <option value="All">All</option>
          <option value="Grass">Grass</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
        </select>

        <button>Submit</button>
      </form>
      <button onClick={props.toggleFalse}>Reset</button>
      
    </div>
  )
}

export default Filter