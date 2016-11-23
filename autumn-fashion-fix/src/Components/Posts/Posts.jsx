
import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import './Posts.css';


class Post extends Component {




  render() {
    return (
      <Col xs={12} md={4}>
       <div className="post">

        <Image src="https://media.giphy.com/media/3o8doNAGKZXsrsgzW8/giphy.gif" rounded />
        <a href="#">link</a>
        <p>kjhgjlfghxldgh</p>

       </div>

      </Col>



    );
  }
}

export default Post;
