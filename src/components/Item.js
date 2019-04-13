import React, { Component } from 'react'

export default class Item extends Component {
  

    
  render() {
      const {index, item, onremoveItem,ontoggleStatus}= this.props;
    return (  
        <tr key={item.id}>
            <td style={{textAlign:'center'}}>{index+1}</td>
            <td>{item.Name}</td>
            <td className="text-center">
                <span className={item.Status? "label label-success":"label label-danger"} onClick={()=>ontoggleStatus(item.id)}>
                            {item.Status? "Kích hoạt" : "Ẩn"}
                        </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning" onClick={()=>this.props.onUpdate(item.id)}>
                    <span className="fa fa-pencil mr-5"></span>  Sửa 
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={()=>onremoveItem(item.id)}>
                    <span className="fa fa-trash mr-5" ></span>  Xóa 
                </button>
            </td>
        </tr> 
    )
  }
}
