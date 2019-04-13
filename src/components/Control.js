import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'


class Control extends Component {
  render() {
    return (  
        <div>
            <Search/>
            <Sort onsortItem={this.props.onsortItem}/>
        </div>
      );
    } 
  }

export default Control;