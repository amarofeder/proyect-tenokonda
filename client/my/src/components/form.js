import React from 'react';
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

  handleSubmit(e){
    e.preventDefault();
  }
  
  render(){
    
    return (
      
      <div>
        <h1>Variables</h1>
        <form onSubmit={this.handleSubmit}>
           <div className='form-group'>
             <div>{this.state.count.map((countValue)=>{return (<div key={countValue}><div><NewVar submitDataKey={`${countValue}`} formState={this.state} formSetStateFunction={this.setState}/></div></div>)})}</div>
             <button onClick={this.incrementar} className='btn-primary-mio' name='desplegar'>add variable</button>
             <div></div>
             <button type='submit' className='btn-primary-mio'>save</button>
           </div>
        </form>
      </div>
    )
    
  }
  
}

export default Form;

