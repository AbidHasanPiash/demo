import React from 'react'
import {FaChartBar} from 'react-icons/fa';
import {BiUpArrowAlt} from 'react-icons/bi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SaleUpdateMonth() {
  const today = new Date();
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const month = today.getMonth();
  const updateMonth = [...months.slice(month), ...months.slice(0, month)]
  console.log(month);
    const data = [
        { name: updateMonth[5], Pharmacy: 4000000, NonPharmacy: 2400000 },
        { name: updateMonth[6], Pharmacy: 3000000, NonPharmacy: 1398000 },
        { name: updateMonth[7], Pharmacy: 2000000, NonPharmacy: 2800000 },
        { name: updateMonth[8], Pharmacy: 2780000, NonPharmacy: 3908000 },
        { name: updateMonth[9], Pharmacy: 1890000, NonPharmacy: 4800000 },
        { name: updateMonth[10], Pharmacy: 2390000, NonPharmacy: 3800000 },
        { name: updateMonth[11], Pharmacy: 3490000, NonPharmacy: 4300000 },
      ];
  return (
    <div className="shadow-xl border rounded">
      {/* heading section */}
      <div className="m-5 text-gray-500">
        <div className='flex items-center justify-between mb-10'>
          <div className='flex items-center justify-start space-x-2'>
            <FaChartBar/> 
            <h1>Monthly Sale Update</h1>
          </div>
          <p className='text-blue-400 hover:text-blue-700 cursor-pointer'>View Report</p>
        </div> 
        {/* ********************************** */}
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='font-bold text-xl'>$18,230.00</h1>
            <p>Sales Over Time</p>
          </div>
          <div className='flex flex-col items-end justify-end'>
            <h1 className='flex items-center justify-center text-xl text-green-500'>
              <BiUpArrowAlt size={20}/>
              <span>33.1%</span>
            </h1>
            <p>Since last month</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 30, bottom: 5, }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Pharmacy" fill="#8884d8" />
          <Bar dataKey="NonPharmacy" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
