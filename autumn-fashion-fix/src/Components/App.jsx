import React, { Component } from 'react';
import Posts from './Posts/Posts';
import Filter from './Filter/Filter';
import './App.css';

// import _ from 'lodash';

// var result = _(data)
//             .groupBy(x => x.serviceName)
//             .map((value, key) => ({service: key, posts: value}))
//             .value();

class App extends Component {
    constructor() {
    super();
    this.state = {
        posts: [],
        filter: null
      };
  }

    updateManualPosts(){
     this.setState({ posts: [...this.state.manualPosts, 1]});
  }

  handleFilter(filter){
    this.setState({ filter: filter});

  }


  render() {
    return (
      <container>
        <Filter onFilter={filter => this.handleFilter(filter)}/>
        <Posts  />
        {JSON.stringify(this.state.filter)}
      </container>
    );
  }
}

export default App;
