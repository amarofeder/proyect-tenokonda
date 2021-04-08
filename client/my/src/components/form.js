import React from 'react';
import NewVar from './newVar';



class Form extends React.Component{
    constructor(props){
      super(props);
      this.incrementar = this.incrementar.bind(this);
      this.state = {
        count: ['soy1'],
        contador: 2,
        
      }
    }
    
    incrementar(){
      var pussh = this.state.count.concat(`soy ${this.state.contador}`);
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
               <div>{this.state.count.map((countValue)=>{return (<div key={countValue}><div><NewVar/></div></div>)})}</div>
               <button onClick={this.incrementar} className='btn btn-primary' name='desplegar'>add variable</button>
               <div></div>
               <button type='submit' className='btn btn-primary'>save</button>
             </div>
          </form>
        </div>
      )
      
    }
    
}

export default Form;

