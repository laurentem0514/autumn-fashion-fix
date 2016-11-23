import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
//import './Filter.css';


class Filter extends Component {
  constructor() {
    super();
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
      <div>
        <Button onClick={() => this.handleFilter('manual')} {...manualAttr}>Manual</Button>
        <Button onClick={() => this.handleFilter('instagram')} {...instagramAttr}>Instagram</Button>
        <Button onClick={() => this.handleFilter('twitter')} {...twitterAttr}>Twitter</Button>
        <Button onClick={() => this.handleFilter('')}>Reset</Button>
      </div>

    );
  }
}

export default Filter;
