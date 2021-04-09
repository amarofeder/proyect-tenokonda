import React from 'react';
import Graph from './grafica';
import NewVar from './newVar';



class Form extends React.Component{
  constructor(props){
    super(props);
    this.incrementar = this.incrementar.bind(this);
    this.state = {
      count: ['id1'],
      contador: 2,
      submitData: {
          id1: {
              "name": "",
              "value": null
          }
      }
    }
  }
  
  incrementar(){
    var pussh = this.state.count.concat(`id${this.state.contador}`);
    this.setState({
      count: pussh,
      contador: this.state.contador + 1
    })
  };
  setStateForm = (id, value) => {
    this.setState({
      ...this.state,
      submitData: {
        ...this.state.submitData,
        [id]: value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const values = JSON.stringify(this.state.submitData);
    

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      };
      const url = "http://localhost:5000/myflask";
      const response = await fetch(url, requestOptions);
      const data = await response.text();

     
  }
  
  render(){
    
    return (
      
      <div>
        <div>
        <h1>Variables</h1>
        <form onSubmit={this.handleSubmit}>
           <div className='form-group'>
             <div>{this.state.count.map((countValue)=>{return (<div key={countValue}><div><NewVar submitDataKey={`${countValue}`} formState={this.state} formSetStateFunction={this.setStateForm}/></div></div>)})}</div>
             <button type='button' onClick={this.incrementar} className='btn-primary-mio' name='desplegar'>add variable</button>
             <div></div>
             <button type='submit' className='btn-primary-mio'>save</button>
           </div>
        </form>
        </div>
        
      </div>
    )
    
  }
  
}

export default Form;

