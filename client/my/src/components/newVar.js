import React from 'react';

class NewVar extends React.Component{

  constructor (props){
      super(props)
      this.state = {
        name: "",
        prob: ""
      }
    }
    handleChange = e => {

      const {name, value} = e.target;
      this.setState({ 
        ...this.state,
        [name]: value});
      let id = this.props.submitDataKey;
      let data = {
        name: this.state.name,
        value: this.state.prob
      }
      
      this.props.formSetStateFunction(id, data);
    }


    

  render(){
      return (
              <div className='form-group'>
                  <label>New Variable</label>  
                  <div className='row'>
                      <label>Name</label>
                      <input placeholder='Enter your name variable' onChange={this.handleChange} className='form-control-mio' type='text' name='name' value={this.state.name}></input>
                  </div>
                  <div className='row'>
                      <label>Prob %</label>
                      <input placeholder='0-100' onChange={this.handleChange} className='form-control-mio-2' type='number' name='prob' value={this.state.prob}></input>
                  </div>
              </div>
      )
  }
}

export default NewVar;
