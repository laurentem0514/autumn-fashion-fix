
import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Post from '../Post/Post';
import './Posts.css';


class Posts extends Component {




  render() {
    const posts = this.props.items.map(
                    function iterator(item, i) {
                        return(<Post key={i} data={item} />);
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
