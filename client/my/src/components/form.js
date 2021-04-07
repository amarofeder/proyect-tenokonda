import React from 'react';

class Form extends React.Component{
    constructor (props){
      super(props)
      this.state = {
        
      }
    }
    handleChange = e => {
      const {name, value} = e.target;
      this.setState({ 
        [name]: value})
    }
    handleSubmit = e => {
      e.preventDefault();
      const values = JSON.stringify(this.state)
      alert(values)
    }
    
    async componentDidMount(){
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
      };
      const url = "http://localhost:5000/holamundo";
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      this.setState();
    };
    

    render(){
      const { name, prob } = this.state;
      return (
        <div>
          <h1>new variable</h1>
          <form onSubmit={this.handleSubmit}>
             <div className='form-group'>
               <label>first var</label>  
               <div className='row'>
                <label>Name</label>
                <input onChange={this.handleChange} className='form-control-mio' type='text' name='firstVar' value={this.state.firstVar}></input>
               </div>
               <div className='row'>
                <label>Prob %</label>
                <input onChange={this.handleChange} className='form-control-mio-2' type='number' name='firstProb' value={this.state.firstProb}></input>
               </div>
               
               <label>second var</label>
               <div className='row'>
                <label>Name</label>
                <input onChange={this.handleChange} className='form-control-mio' type='text' name='secondVar' value={this.state.secondVar}></input>
               </div>
               <div className='row'>
                <label>Prob %</label>
                <input onChange={this.handleChange} className='form-control-mio-2' type='text' name='secondProb' value={this.state.secondProb}></input>
               </div>  
               
               
               <button type='submit' className='btn btn-primary'>save</button>
             </div>
          </form>
        </div>
      )
    }
}

export default Form;
