
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
//import './Post.css';


class Post extends Component {




  render() {
    return (
      <Col xs={12} md={4}>
       <div className="post">

        "text": "Seen on the catwalks at Chanel, Ralph Lauren, and Topshop Unique; think luscious icy bright pastels to add a soft pop of colour to the dull winter months. It works beautifully against grey tailoring and comes in a variety of textures from sugar plum boucle to cashmere soft duck egg blue\u2026",
        "link": "http:\/\/www.bullring.co.uk\/news\/fashion\/aff-edit-new-pastels",
        "link_text": "Click here to explore the trend.",
        "image_url": "http://placehold.it/600x350"

       </div>

      </Col>
    );
  }
}

export default Post;
