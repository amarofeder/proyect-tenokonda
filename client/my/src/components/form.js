import React from 'react';

class Form extends React.Component{
    state = {};
    handleChange = e => {
        this.setState({
         [e.target.name]: e.target.value   
        });
    }
    

    render(){
      return (
        <div>
          <h1>new variable</h1>
          <form>
             <div className='form-group'>
               <label>first var</label>  
               <input onChange={this.handleChange} className='form-control' type='text' name='firstVar' value={this.state.firstVar}></input>
               <label>second var</label>  
               <input onChange={this.handleChange} className='form-control' type='text' name='secondVar' value={this.state.secondVar}></input>
               <button className='btn btn-primary'>save</button>
             </div>
          </form>
        </div>
      )
    }
}

export default Form;
