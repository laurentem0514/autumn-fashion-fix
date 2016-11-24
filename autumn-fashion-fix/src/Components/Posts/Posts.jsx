
import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ManualPost from './ManualPost';
import TwitterPost from './TwitterPost';
import InstagramPost from './InstagramPost';
import './Posts.css';


class Posts extends Component {

  render() {
    const posts = this.props.items.map(
      function iterator(item, i) {
        if (item.service_name === "Manual"){
          return(<ManualPost key={i} data={item} />);
        } else if (item.service_name === "Twitter"){
            return(<TwitterPost key={i} data={item} />);
        } else if (item.service_name === "Instagram"){
            return(<InstagramPost key={i} data={item} />);
        }
      }, this);

    return (
      <Grid >
          <Row>
             { posts }
          </Row>
      </Grid>
    );
  }
}

export default Posts;
