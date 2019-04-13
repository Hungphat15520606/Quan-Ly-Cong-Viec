import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
  constructor(props){
    super(props);
      this.state={
        
    }
  }


  render() {
    const {onremoveItem, ongetFilterMode,ontoggleStatus} = this.props
    return (
      <div>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" className="form-control" />
                    </td>
                    <td>
                        <select className="form-control" value={this.props.filterMode} onChange={(evt)=>{this.props.onchageFilterMode(evt.target.value)}}>
                            <option value="TAT_CA">Tất Cả</option>
                            <option value="KICH_HOAT">Ẩn</option>
                            <option value="AN">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
{/* ----------gọi hàm map để render các item trong mảng ----------   */}
            {ongetFilterMode().map((item, index)=><Item item={item} 
                                                        key={item.id} 
                                                        index={index} 
                                                        onremoveItem={onremoveItem}
                                                        ontoggleStatus={ontoggleStatus}
                                                        onUpdate={this.props.onUpdate}// truyền componennt từ Item sang List
                                                        />)}

            </tbody>
        </table>
      </div>
    )
  }
}


