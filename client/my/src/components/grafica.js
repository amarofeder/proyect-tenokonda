import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries
} from 'react-vis';
class Grafiquita extends React.Component {
    render(){
        return (
            <div className='App-header3'>
                <XYPlot className='xyPot' width={400} height={300} xType='ordinal'>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries 
                        color='#2e1988'
                        data= {
                            [
                                {
                                    x: 'variable 1',
                                    y: 20
                                },
                                {
                                    x: 'variable 2',
                                    y: 5
                                },
                                {
                                    x: 'variable 3',
                                    y: 40
                                }
                            ]
                        }
                        />
                </XYPlot>
            </div>
        )
    }
}

export default Grafiquita;