import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';



class TwitterPost extends Component {


  render() {
    const item_data = this.props.data.item_data;
    return (

         <Col xs={12} md={4}>
           <div className="post post-twitter">
              <h5>{item_data.user.username}</h5>
              <p>{item_data.tweet}</p>
            </div>
        </Col>
    );
  }
}

export default TwitterPost;
