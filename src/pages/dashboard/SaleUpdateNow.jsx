import React from "react";
import {AiOutlineBorderlessTable} from 'react-icons/ai';
import {BiUpArrowAlt} from 'react-icons/bi';

export default function SaleUpdateNow() {
    const data = [
        { token: 215, counter: 'M', salesmaneName: "Sohel", price: 2650, item: 5, time: "14:25:45"},
        { token: 214, counter: 'M', salesmaneName: "Farhad", price: 340, item: 2, time: "14:12:12"},
        { token: 213, counter: 'D', salesmaneName: "Tanvir", price: 456, item: 1, time: "13:20:56"},
        { token: 212, counter: 'M', salesmaneName: "Sohel", price: 980, item: 7, time: "12:35:14"},
        { token: 211, counter: 'D', salesmaneName: "Tanvir", price: 3569, item: 15, time: "11:40:23"},
        { token: 210, counter: 'M', salesmaneName: "Rafsan", price: 106, item: 4, time: "11:05:23"},
      ]
  return (
    <div className="shadow-xl border rounded">
    {/* heading section */}
    <div className="m-5 text-gray-500">
      <div className='flex items-center justify-between mb-10'>
        <div className='flex items-center justify-start space-x-2'>
          <AiOutlineBorderlessTable/> 
          <h1>Realtime Sale Update</h1>
        </div>
        <p className='text-blue-400 hover:text-blue-700 cursor-pointer'>View Report</p>
      </div> 
      {/* ********************************** */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-xl'>$486.45</h1>
          <p>Sales Till Now</p>
        </div>
        <div className='flex flex-col items-end justify-end'>
          <h1 className='flex items-center justify-center text-xl text-green-500'>
            <BiUpArrowAlt size={20}/>
            <span>4.5%</span>
          </h1>
          <p>Since last Day</p>
        </div>
      </div>
    </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Token</th>
            <th className="px-4 py-2 text-left">Counter</th>
            <th className="px-4 py-2 text-left">Salesman</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Item</th>
            <th className="px-4 py-2 text-left">Time</th>
            <th className="px-4 py-2 text-left">More</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, index) => (
              <tr
                key={index}
                className={`${(index+1) % 2 === 0 ? "bg-gray-50" : "bg-gray-300" } 
                transform duration-200 hover:scale-[0.99] hover:bg-blue-900/30`}
              >
                <td className="px-4 py-2">{row.token}</td>
                <td className="px-4 py-2">{row.counter}</td>
                <td className="px-4 py-2">{row.salesmaneName}</td>
                <td className="px-4 py-2">{row.price}</td>
                <td className="px-4 py-2">{row.item}</td>
                <td className="px-4 py-2">{row.time}</td>
                <td className="px-4 py-2">more</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
