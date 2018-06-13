//Library Imports
import React from 'react';
import {withRouter} from 'react-router-dom';

//Custom Imports
import {Routes} from '../../utilities';
import './styles.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let auth = this.props.auth;
    return  (
      <div>
        <Routes/>
      </div>
    )
  }
}

export default withRouter(Main);
