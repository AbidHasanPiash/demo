import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import CoaTableItem from "./CoaTableItem";

export default function ChartOfAccount() {
  const {isLoading, data, error } = useFetch(`http://localhost:8000/coaData`);
  isLoading && <div>Loading...</div>;
  error && <div>Error: {error.message}</div>;
  (!data || !data?.length) && <div>No data found</div>;
  const [editable, setEditable] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const handleSelectedRow = (row) => {
    setSelectedRow(row);
  }
  return (
  <div className='text-lg'>
    <h1>data</h1>
    {data && <div className="w-3/4 mt-20">
      <h1 className="h-12 w-28 border">{selectedRow} - {data?.find((obj) => obj.id === 12)}</h1>
      <div className="space-x-2 ml-4">
        <button onClick={()=> setEditable(true)} className="border rounded-lg px-3 hover:bg-blue-200 hover:bg-opacity-50">Edit</button>
        <button onClick={()=> {setEditable(false)}} className="border rounded-lg px-3 hover:bg-blue-200 hover:bg-opacity-50">Save</button>
        <button onClick={()=> {setEditable(false)}} className="border rounded-lg px-3 hover:bg-blue-200 hover:bg-opacity-50">Cancel</button>
      </div>
      <table className='min-w-full table-fixed border-collapse divide-y divide-gray-200'>
        <thead className="bg-gray-50">
          <tr>
            <th className="w-fit px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Action</th>
            <th className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Yum</th>
            <th className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Size</th>
            <th className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Date</th>
            <th className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Level</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((item, index) => (
            <CoaTableItem 
              key={index} 
              item={item} 
              editable={editable}
              selectedRow={selectedRow} 
              handleSelectedRow={handleSelectedRow}
            />
          ))}
        </tbody>
      </table>
    </div>}
  </div>
  );
}
