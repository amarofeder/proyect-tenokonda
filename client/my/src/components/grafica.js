import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries
} from 'react-vis';
import car from '../images/bgi5.jpg';


class Grafiquita extends React.Component {
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
        
        if (this.state.loading === true){
            return (
                <div className='App-header2'>
                    Loading...
                </div>)
        } else {
            var xs =[
                this.state.data.valor1,
                this.state.data.valor2,
                this.state.data.valor3
            ]
            var ys = [
                this.state.data.valor4,
                this.state.data.valor5,
                this.state.data.valor6
            ]
            return (
                <div className='App-header3' style={{backgroundImage:`url(${car})`}}>
                    <XYPlot className='xyPot' width={400} height={300} xType='ordinal'>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <VerticalBarSeries 
                            color='#166d21'
                            data= {
                                [
                                    {
                                        x: xs[0],
                                        y: ys[0]
                                    },
                                    {
                                        x: xs[1],
                                        y: ys[1]
                                    },
                                    {
                                        x: xs[2],
                                        y: ys[2]
                                    }
                                ]
                            }
                            />
                    </XYPlot>
                </div>
            )
        }
    }
}

export default Grafiquita;