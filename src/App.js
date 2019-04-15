import React, { Component } from 'react';
import Form from './components/Form'
import Control from './components/Control'
import List from './components/List'

const DanhSach=[
    {
      id:'s1',
      Name: "Học lập trình reactjs",
      Status:true
    },
    {
      id:'s2',
      Name: "Luyện nói tiếng anh",
      Status:true
    },
    {
      id:'s3',
      Name: "A cơm",
      Status:true
    }
  ]

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            shouldShowForm: false,
            danhSach: DanhSach,
            filterMode:'TAT_CA',
            update:false,
            //updateItem:{id:"", STT:null, Name: "", Status: Boolean},
            updateItem:null,
            //status:false,
            txtName:'',
            filterName:'',
            keyWords:''
        }
        this.onaddItem=this.onaddItem.bind(this);
        this.onremoveItem=this.onremoveItem.bind(this);
        this.onchangeFilterMode=this.onchangeFilterMode.bind(this)
        this.ongetFilterMode=this.ongetFilterMode.bind(this)
        this.onsortItem=this.onsortItem.bind(this)
        this.ontoggleStatus=this.ontoggleStatus.bind(this)
        this.onUpdate=this.onUpdate.bind(this)
        this.onToggleForm=this.onToggleForm.bind(this)
        this.onchangeFilterName=this.onchangeFilterName.bind(this)
        this.onsearchItem=this.onsearchItem.bind(this)
        this.onchangeSearch=this.onchangeSearch.bind(this)
    }

    onToggleForm(){
        this.setState({
            shouldShowForm: !this.state.shouldShowForm,
            update:false
        })
    }

    onaddItem(newItem){
        const newItems=this.state.danhSach.concat(newItem)
        this.setState({ danhSach: newItems, shouldShowForm : false })
    }

    onremoveItem(id){
        const newItems = this.state.danhSach.filter((item)=>item.id!==id)
        this.setState({danhSach:newItems})
    }

    onchangeFilterMode(filterMode){
        this.setState({filterMode})
    }

    onchangeFilterName(filterName){
        this.setState({filterName})
    }

    onchangeSearch(keyWords){
        this.setState({keyWords})
    }

    onsearchItem(){
        const {keyWords} = this.state
        console.log(keyWords)
        const newItems = this.state.danhSach.filter((item)=>{
            if (keyWords) return  item.Name.toLowerCase().indexOf(keyWords) !== -1;       
            return true 
        })
        if(keyWords) return this.setState({danhSach:newItems})
        else return this.setState({danhSach:DanhSach})
        //return this.setState({danhSach:newItems})
    }

    ongetFilterMode(){
        const {filterMode, danhSach, filterName}=this.state;
        const newItems = danhSach.filter((item)=>{
        if(filterMode==="KICH_HOAT"&&item.Status) return false;
        if(filterMode==="AN"&&!item.Status) return false
        if(filterName) return  item.Name.toLowerCase().indexOf(filterName) !== -1; 
        return true   
        })
        return newItems
    }

    onsortItem(){
        const newItems= this.state.danhSach.sort((a, b)=>{
            if (a.Name.toLowerCase() < b.Name.toLowerCase()) {return -1;}
            if (a.Name.toLowerCase() > b.Name.toLowerCase()) {return 1;}
            return 0;
        });
        console.log(this.state.danhSach)
        return this.setState({danhSach:newItems})    
    }

    ontoggleStatus(id){
        const newItems = this.state.danhSach.map((item)=>{
            if (id!==item.id) return item
            const newItem={...item, Status: !item.Status}
            //console.log(this.state.status)
            return newItem
        })
        //console.log(this.state.status)
        return this.setState({danhSach:newItems})    
    }

     onUpdate(id,newItem){
        const newItems = this.state.danhSach.map((item)=>{
            if (id!==item.id) return item ;           
            this.setState({ updateItem: item}); // dùng state updateItem để lưu giá trị trùng với item ta click vào và gửi id qua componentForm
           // console.log(newItem)//lucc  này sẽ ra undefined
            //const itemX={...newItem,id:item.id, Name:item.Name,Status:item.Status};
            if(newItem) item={...newItem,id:item.id} // do ở đây khi click thì function chạy trong khi chưa có newItem, ta xét nếu như ko có=> return item, nếu có return Item =newItem         
           // console.log(item)
            return item ;
        })
        //console.log(newItems)
        return  this.setState({danhSach:newItems,update:true,shouldShowForm:true})         
     }

  render() {
      const {shouldShowForm}= this.state;
    return (
      <div className="container">
      <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr/>
      </div>
      <div className="row">
      {/*form */}
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {shouldShowForm? <Form  shouldShowForm={shouldShowForm} 
                                    onToggleForm={this.onToggleForm} 
                                    onaddItem={this.onaddItem}
                                    update={this.state.update}
                                    updateItem={this.state.updateItem}
                                    danhSach={this.state.danhSach}
                                    onUpdate={this.onUpdate}/>
                                    :null
                                }             
          </div>
          <div className={shouldShowForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button" className="btn btn-primary" style={{marginBottom:10}}
              onClick={this.onToggleForm}>
                  <span className="fa fa-plus mr-5"></span>Thêm Công Việc
              </button>
              <div className="row mt-15">
                  <Control  onsortItem={this.onsortItem} 
                            danhSach={this.state.danhSach}
                            onsearchItem={this.onsearchItem}
                            keyWords={this.state.keyWords}
                            onchangeSearch={this.onchangeSearch}
                            />
              </div>
              <div className="row mt-15">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <List     danhSach={this.state.danhSach} 
                                onremoveItem={this.onremoveItem} 
                                onchangeFilterMode={this.onchangeFilterMode} 
                                ongetFilterMode={this.ongetFilterMode}
                                ontoggleStatus={this.ontoggleStatus}
                                onUpdate={this.onUpdate}
                                filterName={this.state.filterName}
                                onchangeFilterName={this.onchangeFilterName}/// props được nhận từ 
                                />
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default App;
