import React, { Component } from 'react';
import Posts from './Components/Posts/Posts';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
// import _ from 'lodash';

// var result = _(data)
//             .groupBy(x => x.serviceName)
//             .map((value, key) => ({service: key, posts: value}))
//             .value();

class App extends Component {



  render() {
    return (

        <Grid>
          <Row>
            <Posts />
            <Posts />
            <Posts />
          </Row>
        </Grid>

    );
  }
}

export default App;
