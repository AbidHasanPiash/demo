import React from "react";
import {FaChartLine} from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

export default function SaleUpdate() {
  const today = new Date(); // Get the current date
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[today.getDay()];
  console.log(day);
  console.log(today.getDay());
  const data = [
    { sale: 'as', Pharmacy: 9000, NonPharmacy: 4400 },
    { sale: 'as', Pharmacy: 4000, NonPharmacy: 2400 },
    { sale: 'as', Pharmacy: 5000, NonPharmacy: 4400 },
    { sale: 'as', Pharmacy: 6000, NonPharmacy: 6400 },
    { sale: 'as', Pharmacy: 9000, NonPharmacy: 6400 },
    { sale: 'as', Pharmacy: 4000, NonPharmacy: 8400 },
    { sale: 'as', Pharmacy: 4700, NonPharmacy: 6400 },
  ];
  return (
    <div className="w-full shadow-xl border rounded m-3">
      <div className="h-16 text-gray-500 text-2xl flex items-center justify-start space-x-3 ml-10">
        <FaChartLine/> 
        <h1>Sale Update</h1> 
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart width={500} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sale" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Pharmacy" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="NonPharmacy" stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
