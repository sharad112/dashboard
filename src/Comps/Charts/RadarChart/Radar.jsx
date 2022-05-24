import React from 'react'
import {ResponsiveContainer,Radar,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Legend} from 'recharts';
import {GoPrimitiveDot} from 'react-icons/go';
const RadarC = () => {
    const dataR = [
        {
            subject: 'Approved', A: 120, B: 110, fullMark: 150,label:<GoPrimitiveDot/>
        },
        {
            subject: 'Processing', A: 98, B: 130, fullMark: 150,label:<GoPrimitiveDot/>
        },
        {
            subject: 'Rejected', A: 86, B: 130, fullMark: 150,label:<GoPrimitiveDot/>
        },
        {
            subject: 'Pending', A: 99, B: 100, fullMark: 150,label:<GoPrimitiveDot/>
        },
        {
            subject: 'At hold', A: 85, B: 90, fullMark: 150,label:<GoPrimitiveDot/>
        }
    ];
  return (
   <ResponsiveContainer>
       <RadarChart data={dataR} >
       <PolarGrid />
				<PolarAngleAxis dataKey="subject" />
				<PolarRadiusAxis />
           <Radar dataKey="A" fill='black' />
           <Legend layout="vertical" verticalAlign="top" align="right" />
       </RadarChart>
   </ResponsiveContainer>
  )
}

export default RadarC