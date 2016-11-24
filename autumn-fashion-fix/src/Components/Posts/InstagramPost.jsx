import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';



class InstagramPost extends Component {


  render() {

    const item_data = this.props.data.item_data;

    return (

         <Col xs={12} md={4}>
           <div className="post post-instagram">
            <a href={item_data.link} target="_blank" >
              <Image src={item_data.image.medium} rounded />
            </a>
            <div><strong>{item_data.user.username}</strong></div>
            <p>{item_data.caption}</p>
           </div>

          </Col>
    );
  }
}

export default InstagramPost;
