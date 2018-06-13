import React from 'react';
import './styles.css'
import {Grid} from 'semantic-ui-react';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="home">
          <h1>Find the cheapest way to get from A to B in New York.</h1>
          <Grid id="fullwidegrid">

              <Grid.Row id="steps" columns={"equal"}>
                <Grid.Column>
                        <div className="step">
                                <div className="step-icon">
                                <p>1</p>
                                </div>
                                <div className="step-text">
                                        <h2>Select</h2>
                                        <p>Select your origin and destination</p>
                                </div>
                        </div>
                </Grid.Column>
                <Grid.Column>
                        <div className="step">
                                <div className="step-icon">
                                  <p>2</p>
                                </div>
                                <div className="step-text">
                                        <h2>Compare</h2>
                                        <p>Compae the various available options</p>
                                </div>
                        </div>
                </Grid.Column>
                <Grid.Column>
                        <div className="step">
                                <div className="step-icon">
                                  <p>3</p>
                                </div>
                                <div className="step-text">
                                        <h2>Choose</h2>
                                        <p>Choose the best one and ride with it</p>
                                </div>
                        </div>
                </Grid.Column>
              </Grid.Row>
          </Grid>
          <Grid.Row id="buttons">
                <button>Available on the App Store</button>
                <button>Get it on Google Play</button>
          </Grid.Row>
      </div>
    )
  }
}
export default Home;
