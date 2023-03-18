import React from "react";
import {FaChartLine} from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

export default function SaleUpdate() {
  const data = [
    { sale: "06 AM", Pharmacy: 9000, NonPharmacy: 4400 },
    { sale: "07 AM", Pharmacy: 5000, NonPharmacy: 3400 },
    { sale: "08 AM", Pharmacy: 4000, NonPharmacy: 2400 },
    { sale: "09 AM", Pharmacy: 3000, NonPharmacy: 3400 },
    { sale: "10 AM", Pharmacy: 5000, NonPharmacy: 4400 },
    { sale: "11 AM", Pharmacy: 4000, NonPharmacy: 5400 },
    { sale: "12 AM", Pharmacy: 6000, NonPharmacy: 6400 },
    { sale: "01 PM", Pharmacy: 8000, NonPharmacy: 7400 },
    { sale: "02 PM", Pharmacy: 9000, NonPharmacy: 6400 },
    { sale: "03 PM", Pharmacy: 5000, NonPharmacy: 7400 },
    { sale: "04 PM", Pharmacy: 4000, NonPharmacy: 8400 },
    { sale: "05 PM", Pharmacy: 5000, NonPharmacy: 7400 },
    { sale: "06 PM", Pharmacy: 4700, NonPharmacy: 6400 },
    { sale: "07 PM", Pharmacy: 6000, NonPharmacy: 5400 },
    { sale: "08 PM", Pharmacy: 5000, NonPharmacy: 4400 },
    { sale: "09 PM", Pharmacy: 8000, NonPharmacy: 5400 },
    { sale: "10 PM", Pharmacy: 9000, NonPharmacy: 4400 },
    { sale: "11 PM", Pharmacy: 4000, NonPharmacy: 5400 },
    { sale: "12 PM", Pharmacy: 5000, NonPharmacy: 4400 },
  ];
  return (
    <div className="w-full sm:w-2/3 shadow-xl border rounded m-3">
      <div className="h-16 text-gray-500 text-2xl flex items-center justify-start space-x-3 ml-10">
        <FaChartLine/> 
        <h1>Sale Update</h1> 
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data}>
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
