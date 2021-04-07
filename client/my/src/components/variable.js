import React from 'react';

class VariableNum extends React.Component{
    render(){
        return (
            <div>
                <label>first var</label>  
                <div className='row'>
                    <label>Name</label>
                    <input onChange={this.handleChange} className='form-control-mio' type='text' name='firstVar' value={this.state.firstVar}></input>
                </div>
                <div className='row'>
                 <label>Prob %</label>
                 <input onChange={this.handleChange} className='form-control-mio-2' type='number' name='firstProb' value={this.state.firstProb}></input>
               </div>
            </div>
        )
    }
}

export default VariableNum;