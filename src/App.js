import React, { Component } from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
import MenuComponent from './components/MenuComponent';
import {DISHES} from './components/shared/Dishes'
export class App extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      dishes: DISHES
    }
  }
  
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
        <MenuComponent dishes={this.state.dishes}/>
      </div>
    )
  }
}

export default App

