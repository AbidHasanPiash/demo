import React from "react";
import {FaChartLine} from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

export default function SaleUpdate() {
  const data = [
    { name: "00 AM", Pharmacy: 1000, NonPharmacy: 2400, amt: 2400 },
    { name: "01 AM", Pharmacy: 4000, NonPharmacy: 3400, amt: 2400 },
    { name: "02 AM", Pharmacy: 6000, NonPharmacy: 4400, amt: 2400 },
    { name: "03 AM", Pharmacy: 7000, NonPharmacy: 5400, amt: 2400 },
    { name: "04 AM", Pharmacy: 4000, NonPharmacy: 6400, amt: 2400 },
    { name: "05 AM", Pharmacy: 8000, NonPharmacy: 5400, amt: 2400 },
    { name: "06 AM", Pharmacy: 9000, NonPharmacy: 4400, amt: 2400 },
    { name: "07 AM", Pharmacy: 5000, NonPharmacy: 3400, amt: 2400 },
    { name: "08 AM", Pharmacy: 4000, NonPharmacy: 2400, amt: 2400 },
    { name: "09 AM", Pharmacy: 3000, NonPharmacy: 3400, amt: 2400 },
    { name: "10 AM", Pharmacy: 5000, NonPharmacy: 4400, amt: 2400 },
    { name: "11 AM", Pharmacy: 4000, NonPharmacy: 5400, amt: 2400 },
    { name: "12 AM", Pharmacy: 6000, NonPharmacy: 6400, amt: 2400 },
    { name: "01 PM", Pharmacy: 8000, NonPharmacy: 7400, amt: 2400 },
    { name: "02 PM", Pharmacy: 9000, NonPharmacy: 6400, amt: 2400 },
    { name: "03 PM", Pharmacy: 5000, NonPharmacy: 7400, amt: 2400 },
    { name: "04 PM", Pharmacy: 4000, NonPharmacy: 8400, amt: 2400 },
    { name: "05 PM", Pharmacy: 5000, NonPharmacy: 7400, amt: 2400 },
    { name: "06 PM", Pharmacy: 4700, NonPharmacy: 6400, amt: 2400 },
    { name: "07 PM", Pharmacy: 6000, NonPharmacy: 5400, amt: 2400 },
    { name: "08 PM", Pharmacy: 5000, NonPharmacy: 4400, amt: 2400 },
    { name: "09 PM", Pharmacy: 8000, NonPharmacy: 5400, amt: 2400 },
    { name: "10 PM", Pharmacy: 9000, NonPharmacy: 4400, amt: 2400 },
    { name: "11 PM", Pharmacy: 4000, NonPharmacy: 5400, amt: 2400 },
  ];
  return (
    <div className="w-full sm:w-2/3 shadow-xl border rounded m-3">
      <div className="h-16 text-2xl flex items-center justify-start space-x-3 ml-10">
        <FaChartLine/> 
        <h1>Sale Update</h1> 
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={900}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
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
