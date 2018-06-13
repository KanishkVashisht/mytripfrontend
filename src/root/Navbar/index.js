//library imports
import React from 'react';

//custom imports
import './styles.css'
import {Image} from 'semantic-ui-react';


export default class Navbar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="navbar">
          <div id="logo">
              <img src={require("../../assets/MyTrip.png")}/>
          </div>
      </div>
    )
  }
}
