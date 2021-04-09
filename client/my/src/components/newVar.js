import React from 'react';

class NewVar extends React.Component{

  constructor (props){
      super(props)
      this.state = {
        values: []
      }
    }
    handleChange = e => {

      const {name, value} = e.target;

      let currentState = this.props.formState;
      let dataKey = this.props.submitDataKey;
      currentState.submitData[dataKey] = {
          name: name,
          value: value
      }

      
      this.props.formSetStateFunction(currentState);


      this.setState({ 
        [name]: value});
    }


    
    async componentDidMount(){
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
      };
      const url = "http://localhost:5000/myflask";
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      this.setState();
    };
  render(){
      return (
              <div className='form-group'>
                  <label>New Variable</label>  
                  <div className='row'>
                      <label>Name</label>
                      <input placeholder='Enter your name variable' onChange={this.handleChange} className='form-control-mio' type='text' name={this.state.name} value={this.state.value}></input>
                  </div>
                  <div className='row'>
                      <label>Prob %</label>
                      <input placeholder='0-100' onChange={this.handleChange} className='form-control-mio-2' type='number' name={this.state.name} value={this.state.value}></input>
                  </div>
              </div>
      )
  }
}

export default NewVar;
