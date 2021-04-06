import React from 'react';

class Grafic extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount() {
       this.fetchData();
    };

    fetchData= async () => {
        this.setState({loading: true, error: null})
        try{
            const url = "http://localhost:5000/holamundo";
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            this.setState({loading:false, data: data})
        } catch(error){
            console.log(error);
           this.setState({loading: false, error: error})
        }
    };
    


    render(){
        if (this.state.loading == true){
            return 'Loading...'
        }
        return(
            <div>
               <div>{this.state.data.valor1}</div>
               <div>{this.state.data.valor2}</div>
               <div>{this.state.data.valor3}</div>
            </div>
        )
    }
};

export default Grafic;