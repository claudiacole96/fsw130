import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import Chosen from './Chosen'

function Navbar () {
  return (
    <div id="header-div">
        <header id='linksDiv'>
            <h1>Choose Your Pokemon</h1>
            <nav id='links'>
                <Link to = "/">Home</Link>
                <Link to ='/Chosen'>Pokemon</Link>
            </nav>
        </header>

            <Switch>
                <Route exact path = '/'>
                <Home />
                </Route>

                <Route path = '/Chosen'>
                <Chosen />
                </Route>
            </Switch>
    </div>
    
  )
}

export default Navbar