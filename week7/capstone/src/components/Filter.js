import React from 'react'

function Filter (props) {
  return (
    <div id='filterForm'>
        <select id='filterDrop' onChange={(event) => props.filter(event)}>
          <option value="All">All</option>
          <option value="Grass">Grass</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
        </select>
    </div>
  )
}

export default Filter