import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control1 extends Component {
  render() {
    const {
      onsearchItem,
      keyWords,
      onsortItem,
      danhSach,
      onchangeSearch,
      ongetFilter
    } = this.props;
    return (
      <div>
        <Search
          onsearchItem={onsearchItem}
          keyWords={keyWords}
          onchangeSearch={onchangeSearch}
          ongetFilter={ongetFilter}
        />
        <Sort onsortItem={onsortItem} danhSach={danhSach} />
      </div>
    );
  }
}

export default Control1;
