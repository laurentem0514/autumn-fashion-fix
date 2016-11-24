
import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';



class ManualPost extends Component {


  render() {
    const item_data = this.props.data.item_data;
    return (
         <Col xs={12} md={4}>
          <div className="post post-manual">
            <Image src={item_data.image_url} rounded />
            <p>{item_data.text}</p>
            <a href={item_data.link} target="_blank" >{item_data.link_text}</a>
          </div>
          </Col>
    );
  }
}

export default ManualPost;
