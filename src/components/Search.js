import React, { Component } from 'react';


class Search extends Component {
  
  render() {
   const {onsearchItem, onchangeSearch,keyWords} = this.props
    return (    
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{marginBottom:20}}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa..." value={keyWords} onChange={(evt)=>{onchangeSearch(evt.target.value)}} />
                    <span className="input-group-btn">
                                <button className="btn btn-primary" type="button" onClick={onsearchItem}>
                                    <span className="fa fa-search mr-5"></span> Tìm
                                </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;