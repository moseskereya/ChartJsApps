import React, { Component } from 'react';
import '../App.css'
import { Bar, Line, Pie } from 'react-chartjs-2';
class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {  GraphData: {
            labels: ['Arusha', 'Dar es Salaa', 'Mwanza', 'Dodoma',  'Mbeya', 'Tabora', 'Manyara'],
        datasets:[{
            label : 'Most popular cities in Tanzania',
            data:[89275,39609, 38945, 37697, 34076, 97475, 54987, 95489, 35470],
            backgroundColor: ['#75ABBC','#23B5D3' , '#A2AEBB', '#14213d', '#e63946', '#370617', '#e07a5f', '#003049', '#495057', '#6d597a', '#b100e8', '#ee4266']
        }
     ]
    }
 }
}

    render() { 
        return ( 
            <div>
                <Pie
                data={this.state.GraphData}
                options= {{
                    title: {
                     display: true,
                     text: 'Most Popular cities in Tanzania',
                     fontSize: 25,
                     fontColor: '#444',
                     Margin:5
                    },
                    legend:{
                        display: true,
                        position: "top"
                    }
                }}
                />
                <Line
                data={this.state.GraphData}
                options= {{
                    title: {
                     display: true,
                     text: 'Most Popular cities in Tanzania',
                     fontSize: 25,
                     fontColor: '#444',
                     Margin:5
                    },
                    legend:{
                        display: true,
                        position: "top"
                    }
                }}
                />
                  <Bar
                data={this.state.GraphData}
                options= {{
                    title: {
                     display: true,
                     text: 'Most Popular cities in Tanzania',
                     fontSize: 25,
                     fontColor: '#444',
                     Margin:5
                    },
                    legend:{
                        display: true,
                        position: "top"
                    }
                }}
                />
            </div>
         );
    }
}
 
export default Graph;