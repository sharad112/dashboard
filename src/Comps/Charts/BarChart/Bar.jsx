import React from 'react'
import  {ResponsiveContainer,BarChart,Bar,XAxis,YAxis, Tooltip,Legend}from "recharts";
const Chart = () => {
  const pdata=[
    {
      name:"Sun",
      verified:12,
      unverified:15
    },
    {
      name:"Mon",
      verified:13,
      unverified:18
    },
    {
      name:"Tue",
      verified:10,
      unverified:9
    },
    {
      name:"Wed",
      verified:15,
      unverified:20
    },
    {
      name:"Thu",
      verified:13,
      unverified:12
    },
    {
      name:"Fri",
      verified:15,
      unverified:19
    },
    {
      name:"Sat",
      verified:11,
      unverified:13
    } 
  ]
  return (
    <ResponsiveContainer width="95%" height={300}>
      <BarChart data={pdata}>
      <XAxis dataKey={"name"} interval={'preserveStartEnd'}/>
       
      <Bar dataKey="unverified"/>
      <Bar dataKey="verified" fill="grey"/>
      <Legend layout="vertical" verticalAlign="top" align="right" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Chart