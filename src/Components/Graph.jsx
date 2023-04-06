import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import './Graph.css'

const Graph = ({data}) => {
   const renderLineChart = (
      <LineChart width={1200} height={300} data={data}>
         <Line type="monotone" dataKey="temp" stroke="#fff" />
         <CartesianGrid stroke="#000" />
         <XAxis dataKey="datetime" stroke="#fff"/>
         <YAxis stroke="#fff"/>
         <Tooltip />

      </LineChart>
   );

   return (
      <div className="graphs">
         {renderLineChart}
      </div>
   )
}

export default Graph;