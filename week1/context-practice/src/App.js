import React from "react"
import "./App.css"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Theme from "./components/Theme"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      theme: "default"
    };
  }

  handler() {
    if (this.state.theme == "default") {
      this.setState({
        theme: "dark"
      })
    } else {
      this.setState({
        theme: "default"
      })
    }
  }

  render() {
    return (
      <Theme.Provider value = {{state: this.state.theme, changeState: this.changeState}}>
        <Navbar data={this.state.theme} />
        <Main data={this.state.theme} action={this.handler}/>
        <Footer data={this.state.theme} />
      </Theme.Provider>
    )
  }

}

export default App