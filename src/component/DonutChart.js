import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';
const DdStyle = ()=>{
  return (
    <style>
      {`
      .conta{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .d-one{
        font-size: 14px;
        font-weight: bold;
      }
      .circle{
        display:inline-block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        margin-right:3px;
      }
      .circle-one{
      background-color: gray;
      }
      .circle-two{
          background-color: rgb(255, 217, 0);
      }
      .circle-three{
          background-color: rgb(82, 209, 82);
      }
      .circle-four{
          background-color: rgb(0, 153, 255);
      }
      .heading{
        text-align: center;
        font-size: 20px;
        color: white;
        font-weight:bold;
      }
    
      `}
    </style>
  )
}
const DonutChart = () => {
  const data = [
    {name: 'Geeksforgeeks', students: 400},
    {name: 'Technical scripter', students: 700},
    {name: 'Geek-i-knack', students: 300},
    {name: 'Geek-i-knack', students: 400},
    {name: 'Geek-o-mania', students: 100}
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', 'rgb(128, 0, 90)','gray'];
  return (
    <>
        <div className="conta py-5">
          <div className="heading">Overview</div>
            <PieChart width={300} height={300}>
            <Pie data={data} dataKey="students" cx="50%"
            cy="50%" outerRadius={130} innerRadius={50} label={renderCustomizedLabel}>
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            </PieChart>

            <div className="data">
                  <div className="row">
                      <div className="col-11 col-md-6 m-auto my-3">
                        <div className="d-one">
                            <span className="circle circle-one"></span>
                            pending
                        </div>
                      </div>
                      <div className="col-11 col-md-6 m-auto my-3">
                        <div className="d-one">
                            <span className="circle circle-two"></span>
                            processing
                        </div>
                      </div>
                      <div className="col-11 col-md-6 m-auto my-3">
                        <div className="d-one">
                            <span className="circle circle-three"></span>
                            Ready to deliver
                        </div>
                      </div>
                      <div className="col-11 col-md-6 m-auto my-3">
                        <div className="d-one">
                            <span className="circle circle-four"></span>
                            Delivered
                        </div>
                      </div>
                     

                      
                  </div>
            </div>
            <DdStyle/>
        </div>
    </>
  )
}
export default DonutChart


