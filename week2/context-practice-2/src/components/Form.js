import React from "react"

function Form () {
    return(
        <div>
            <form id="addMovie">
                <input type="text" placeholder="title"></input>
                <input type="number" placeholder="year"></input>
                <input type="text" placeholder="genre"></input>
                <button>ADD</button>
            </form>
        </div>
    )
}

export default Form