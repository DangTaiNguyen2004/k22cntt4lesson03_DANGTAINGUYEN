import React, { Component } from 'react';

 class DTNproductApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : 0,
            title:'',
            status:0

        }
    }
    dtnHandleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    dtnHandleSubmit = (ev)=>{
        ev.prenventDefault();

        this.props.onSubmit(this.state);
    }
  render() {
    return (
      <div>
        <h2>them san pham moi</h2>
        <form className='col-md-6'>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                ID
            </span>
            <input
                type="text"
                className="form-control"
                id='id'
                name='id'
                value={this.state.id}
                onChange={this.dtnHandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
                title
            </span>
            <input
                type="text"
                className="form-control"
                name='title'
                value={this.state.title}
                onChange={this.dtnHandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
                status
            </span>
            <input
                type="text"
                className="form-control"
                name='status'
                value={this.state.status}
                onChange={this.dtnHandleChange}
            />
        </div>
        <button className='btn btn-success' onClick={this.dtnHandleSubmit}> ghi lai</button>
        </form>
      </div>
    );
  }
}

export default DTNproductApp;