import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import './Filter.css';


class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        manualSelected: false,
        instagramSelected: false,
        twitterSelected: false
      };
  }


   handleFilter(filterType) {
    const newState = {
      manualSelected: filterType === 'manual',
      instagramSelected: filterType === 'instagram',
      twitterSelected: filterType === 'twitter'
    };
    this.setState(newState);
    this.props.onFilter(newState);
  }

  getButtonAttr(filterType){
     const opts = {};
        if ((filterType === 'manual' && this.state.manualSelected)
          ||(filterType === 'instagram' && this.state.instagramSelected)
          ||(filterType === 'twitter' && this.state.twitterSelected)){
            opts['bsStyle'] = 'primary';
        }
        return opts;
  }


  render() {
    const manualAttr = this.getButtonAttr('manual');
    const instagramAttr = this.getButtonAttr('instagram');
    const twitterAttr = this.getButtonAttr('twitter');

    return (
      <div className="filters">
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <span>Filters </span>
              <Button bsSize="xsmall" onClick={() => this.handleFilter('manual')} {...manualAttr}>Manual</Button>
              <Button bsSize="xsmall" onClick={() => this.handleFilter('instagram')} {...instagramAttr}>Instagram</Button>
              <Button bsSize="xsmall" onClick={() => this.handleFilter('twitter')} {...twitterAttr}>Twitter</Button>
              <Button bsSize="xsmall" onClick={() => this.handleFilter('')}>All</Button>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default Filter;
