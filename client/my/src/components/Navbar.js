import React from 'react';
import icon from '../images/iconnavbar.png';

class Navbar extends React.Component{
    render(){
      return (
        <div className='App-header4'>
          <div className='row'>
            <div className='img-mio'><img src={icon} width='100' height='100'></img></div>
            <div className='div-mio'><h1>RISK CALCULATION GRAPH</h1></div>
          </div>
        </div>
      )
    }
}

export default Navbar;