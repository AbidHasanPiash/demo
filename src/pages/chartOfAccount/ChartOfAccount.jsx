import React, { useEffect, useState } from "react";
import CoaTableItem from "./CoaTableItem";

export default function ChartOfAccount() {
  // const {isLoading, data, error } = useFetch(`http://localhost:8000/coaData`);
  // isLoading && <div>Loading...</div>;
  // error && <div>Error: {error.message}</div>;
  // (!data || !data?.length) && <div>No data found</div>;
  const endpoint = `http://localhost:8000/coaData`;
  const [data, setData] = useState();
  //console.log(data);
  const [editable, setEditable] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  // Data fetching from json server
  useEffect(() => {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
  }, [endpoint]);
  // Handle Selected row
  const handleSelectedRow = (row) => {
    setSelectedRow(row);
  };
  // update selected row with updated value
  const updateObjects = (updatedObject) => {
    const updatedObjects = data.map((object) => {
      if (object.id === updatedObject.id) {
        return updatedObject;
      }
      else return object;
    });
    setData(updatedObjects);
    //console.log(data);
  };
  // Put the updated value to the Json Server
  const handleSave = () => {
    setEditable(false);
    // fetch(endpoint, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => setData(data))
    //   .catch((error) => console.error(error));
  }
  return (
  <div className='text-lg'>
    <h1>data</h1>
    {data && <div className="w-3/4 mt-20">
      <h1 className="h-12 border">{selectedRow.id}-{selectedRow.name}</h1>
      <div className="space-x-2 ml-4">
        <button onClick={()=> setEditable(true)} className="border rounded-lg px-3 hover:bg-blue-200 hover:bg-opacity-50">Edit</button>
        <button onClick={handleSave} className="border rounded-lg px-3 hover:bg-blue-200 hover:bg-opacity-50">Save</button>
        <button onClick={()=> {setEditable(false)}} className="border rounded-lg px-3 hover:bg-blue-200 hover:bg-opacity-50">Cancel</button>
      </div>
      <table className='min-w-full table-fixed border-collapse divide-y divide-gray-200'>
        <thead className="bg-gray-50">
          <tr>
            <th className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Action</th>
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
              updateObjects ={updateObjects }
            />
          ))}
        </tbody>
      </table>
    </div>}
  </div>
  );
}
