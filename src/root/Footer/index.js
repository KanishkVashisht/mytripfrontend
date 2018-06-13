import React from 'react';
import './styles.css';

export default class Footer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="footer">
            <div id="flogo">
                <img src={require("../../assets/icon.png")}/>
            </div>
      </div>
    )
  }
}
