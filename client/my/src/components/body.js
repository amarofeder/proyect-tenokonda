import React from 'react';
import Description from './description';
import Form from './form';
import car from '../images/bgi5.jpg';


class Body extends React.Component{
    render(){
        return(
            <div className='App-header' style={{backgroundImage:`url(${car})`}}>
                <div className='container-mio'>
                    <div className='col-6'> 
                        <div><Description /></div>
                        <div><Form/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;
