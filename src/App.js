import React, { Component } from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
import MenuComponent from './components/MenuComponent';
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color='primary'>
            <div className="container">
              <NavbarBrand href="/">
                Ristorante Con Fusion
              </NavbarBrand>
            </div>
        </Navbar>
        <MenuComponent />
      </div>
    )
  }
}

export default App

