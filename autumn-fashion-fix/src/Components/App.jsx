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
        posts: [{
        "image_id": 226,
        "text": "Seen on the catwalks at Chanel, Ralph Lauren, and Topshop Unique; think luscious icy bright pastels to add a soft pop of colour to the dull winter months. It works beautifully against grey tailoring and comes in a variety of textures from sugar plum boucle to cashmere soft duck egg blue\u2026",
        "link": "http:\/\/www.bullring.co.uk\/news\/fashion\/aff-edit-new-pastels",
        "link_text": "Click here to explore the trend.",
        "image_url": "http://placehold.it/600x350"
    }],
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
        <Posts items={this.state.posts} />

      </container>
    );
  }
}

export default App;
