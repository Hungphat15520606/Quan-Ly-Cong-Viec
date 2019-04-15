import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'


class Control extends Component {
  render() {
    const {onsearchItem,keyWords,onsortItem,danhSach, onchangeSearch}=this.props
    return (  
        <div>
            <Search   onsearchItem={onsearchItem}
                      keyWords={keyWords}
                      onchangeSearch={onchangeSearch}/>
            <Sort onsortItem={onsortItem} 
                  danhSach={danhSach}
                  />
        </div>
      );
    } 
  }

export default Control;