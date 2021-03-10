import React from "react"
import './App.css';

import {FormContextConsumer} from "./components/FormContext"
import Movies from "./components/Movies"
import Form from "./components/Form"
import movieData from "./components/movieData"

class App extends React.Component {
  state = {
    newMovieTitle: "",
    newMovieYear: "",
    newMovieGenre: ""
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render () {
    return(
      <div>
        <h1>Favorite Movies</h1>
        <Form />
        <Movies />
      </div>
    )
  }
}

export default App;