import React from 'react';

class Form extends React.Component{
    render(){
      return (
        <div>
          <h6>new variable</h6>
          <form>
             <div className='form-group'>
               <label>first var</label>  
               <input className='form-control' type='text' name='first var'></input>
               <button className='btn btn-primary'>save</button>
             </div>
          </form>
        </div>
      )
    }
}

export default Form;