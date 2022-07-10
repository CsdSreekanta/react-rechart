import React from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'Page A',
          price: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          price: 3000,
          sales: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          price: 2000,
          sales: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          price: 2780,
          sales: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          price: 1890,
          sales: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          price: 2390,
          sales: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          price: 3490,
          sales: 4300,
          amt: 2100,
        },
      ];
      
    return (
        
    <div className="flex">
       <div>
       <h2 className='text-3xl font-bold mb-6'>This is Line Chart</h2>
         <LineChart width={700} height={400} data={data}>
        <Line dataKey={'price'} stroke="#0000ff"></Line>
        <Line dataKey={'sales'} stroke="#ff0000"></Line>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
       </LineChart>
       </div>

       <div>
       <h2 className='text-3xl font-bold mb-6'>This is PieChart</h2>
       <PieChart width={700} height={250} >
        <Pie data= {data} dataKey={'price'} stroke="#ffa500" fill="#ff49d2" label></Pie>
        <Tooltip></Tooltip>
       </PieChart>
       </div>
      
    </div>
    );
};

export default MyLineChart;