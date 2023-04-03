import React from "react";
import {FaChartLine} from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

export default function SaleUpdate() {
  const today = new Date(); // Get the current date
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = today.getDay();
  const updateDays = [...days.slice(day), ...days.slice(0, day)];
  console.log(updateDays);
  const data = [
    { sale: updateDays[6], Pharmacy: 9000, NonPharmacy: 4400 },
    { sale: updateDays[5], Pharmacy: 4000, NonPharmacy: 2400 },
    { sale: updateDays[4], Pharmacy: 5000, NonPharmacy: 4400 },
    { sale: updateDays[3], Pharmacy: 6000, NonPharmacy: 6400 },
    { sale: updateDays[2], Pharmacy: 9000, NonPharmacy: 6400 },
    { sale: updateDays[1], Pharmacy: 4000, NonPharmacy: 8400 },
    { sale: updateDays[0], Pharmacy: 4700, NonPharmacy: 6400 },
  ];
  return (
    <div className="shadow-xl border rounded">
      <div className="h-16 text-gray-500 text-2xl flex items-center justify-start space-x-3 ml-10">
        <FaChartLine/> 
        <h1>Sale Update</h1> 
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart width={500} height={300} margin={{ top: 5, right: 40, left: 10, bottom: 5, }} data={data}>
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
