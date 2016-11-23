
import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
//import './Post.css';


class Post extends Component {




  render() {
    const item = this.props.data;
    return (

         <Col xs={12} md={4}>
           <div className="post">
           {/*
            <Image src="https://media.giphy.com/media/3o8doNAGKZXsrsgzW8/giphy.gif" rounded />
            <a href="#">link</a>
            <p>kjhgjlfghxldgh</p>
              */}
            <Image src={item.image_url} rounded />
            <a href={item.link} target="_blank" >{item.link_text}</a>
            <p>{item.text}</p>

           </div>

          </Col>
    );
  }
}

export default Post;
