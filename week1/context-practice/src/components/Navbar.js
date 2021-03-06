import React from "react"

class Navbar extends React.Component {

    render() {
        return(
            <nav className={this.props.data}>
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
            </nav>
        )
    }
}

export default Navbar