import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Posts from './Posts/Posts';
import Filter from './Filter/Filter';
import './App.css';

class App extends Component {
    constructor() {
    super();
    this.state = {
        posts: [],
        visiblePosts: [],
        filter: {
          manualSelected: false,
          twitterSelected: false,
          instagramSelected: false
        },
        pageSize: 15
      };

    this.filterPost = (post, filter) => {
      if (!filter.manualSelected
        && !filter.twitterSelected
        && !filter.instagramSelected){
        return true;
      }

      return (filter.manualSelected && post.service_name === 'Manual')
              || (filter.twitterSelected && post.service_name === 'Twitter')
              || (filter.instagramSelected && post.service_name === 'Instagram');

    }

    this.loadData = () => {
      fetch(`posts.json?skip=${this.state.posts.length}&pageSize=${this.state.pageSize}`)
        .then( (response) => {
            return response.json() })
                .then( (json) => {
                  const newPosts = [...this.state.posts, ...json.items.slice(0, this.state.pageSize)];

                  this.setState({
                    posts: newPosts,
                    visiblePosts: newPosts.filter((post) => { return this.filterPost(post,this.state.filter);})
                  });
                })
   }
  }

  componentDidMount() {
        this.loadData();
    };

  handleFilter(filter){
    this.setState({
      filter: filter,
      visiblePosts: this.state.posts.filter((post) => { return this.filterPost(post,filter);})
    });
  }

  render() {
    return (
      <container>
        <Filter onFilter={filter => this.handleFilter(filter)}/>
        <Posts items={this.state.visiblePosts} />
        <div className="pager">
         <Button onClick={() => this.loadData()} bsStyle="primary" block>More</Button>
        </div>
      </container>
    );
  }
}

export default App;
