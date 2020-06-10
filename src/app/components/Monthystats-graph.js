import React, { PureComponent, Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class Monthlystats extends  Component{
    
    render(){
        const data1=this.props.linegraph;
        return(
            <LineChart width={410} height={300} data={data1}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        );
    }
}

export default Monthlystats