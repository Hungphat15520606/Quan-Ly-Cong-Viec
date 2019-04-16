import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            txtName: this.props.update? this.props.updateItem.Name:'',
            status: this.props.update? (this.props.updateItem.Status===true?1:0): 0,
        }
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const {txtName, status}= this.state;
        const {onaddItem}= this.props;
        const newItem={
            id: Math.random() + "",
            Name : txtName,
            Status: status==1?true:false
        }
        onaddItem(newItem);
        //this.setState({name:''})
    }

    closeForm=(e)=>{
        e.preventDefault();
        this.props.onToggleForm()      
    }

    updateItem=(event)=>{
        event.preventDefault();
        const {txtName, status}= this.state;
        const {onUpdate,updateItem} = this.props
       // console.log(updateItem.Status)
        const newItem={
            id: updateItem.id,
            Name : txtName,
            Status: status==1?true:false,
        }
     //   console.log(newItem)
        onUpdate(updateItem.id,newItem)
        this.setState({name:''})     
    } 

  render() {
      const {onToggleForm,update}=this.props
    return (     
            <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title"> {update? "Sửa công việc":"Thêm Công Việc"} 
                    <span type="button" className="fa fa-times-circle" style={{float:"right"}}
                        onClick={onToggleForm}>
                    </span>
                </h3>
            </div>
            <div className="panel-body">
                <form >
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control"  value={this.state.txtName} onChange={evt => this.setState({txtName: evt.target.value})}/>
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required" value={this.state.status}
                        onChange={evt => this.setState({ status: evt.target.value})}
                        >
                        <option value={1}> Kích Hoạt</option>
                        <option value={0}> Ẩn </option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button  className="btn btn-warning" onClick={update? this.updateItem:this.onSubmit} > {update?"Lưu lại":"Thêm"} </button>&nbsp;
                        <button className="btn btn-danger" onClick={this.closeForm}>{update?"Xong":"Hủy Bỏ "} </button>
                    </div>
                </form>             
            </div>
        </div>
            
     );
  }
}

export default Form;
