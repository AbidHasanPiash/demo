import React from "react";
import useFetch from "../hooks/useFetch";
import CoaTableItem from "./coaContent/CoaTableItem";

export default function ChartOfAccount() {
  const {isLoading, data, error } = useFetch(`http://localhost:8000/coaData`);
  isLoading && <div>Loading...</div>;
  error && <div>Error: {error.message}</div>;
  (!data || !data?.length) && <div>No data found</div>;
  // const data2 = [
  //   { id: 1, level: 1, name: "C", size: "", date: "02/19/2010", children: [
  //       { id: 11, level: 2, name: "Program Files", size: "120MB", date: "03/20/2010", 
  //         children: [
  //           { id: 111, level: 3, name: "Java", size: "", date: "01/13/2010", state: "closed", 
  //             children: [
  //               { id: 1111, level: 4, name: "java.exe", size: "142KB", date: "01/13/2010", },
  //               { id: 1112, level: 4, name: "jawt.dll", size: "5KB", date: "01/13/2010", },
  //             ],
  //           },
  //           { id: 112, level: 3, name: "MySQL", size: "", date: "01/13/2010", state: "closed",
  //             children: [
  //               { id: 1121, level: 4, name: "my.ini", size: "10KB", date: "02/26/2009", },
  //               { id: 1122, level: 4, name: "my-huge.ini", size: "5KB", date: "02/26/2009", },
  //               { id: 1123, level: 4, name: "my-large.ini", size: "5KB", date: "02/26/2009", },
  //             ],
  //           },
  //         ],
  //       },
  //       { id: 12, level: 2, name: "eclipse", size: "", date: "01/20/2010",
  //         children: [
  //           { id: 121, level: 3, name: "eclipse.exe", size: "56KB", date: "05/19/2009", },
  //           { id: 122, level: 3, name: "eclipse.ini", size: "1KB", date: "04/20/2010", },
  //           { id: 123, level: 3, name: "notice.html", size: "7KB", date: "03/17/2005", },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  return (
  <div className='text-lg'>
    <h1>data</h1>
    <div className="w-3/4 mt-20">
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
          {data?.map((item, index)=>(
            <CoaTableItem key={index} item={item}/>
          ))}
        </tbody>
      </table>
    </div>
    {/* Duplicate table */}
    <div className="w-3/4 mt-20">
      <div className="space-x-2 ml-4">
        <button className="border rounded-lg px-3 hover:bg-blue-200 hover:bg-opacity-50">Edit</button>
        <button className="border rounded-lg px-3 hover:bg-blue-200 hover:bg-opacity-50">Save</button>
        <button className="border rounded-lg px-3 hover:bg-blue-200 hover:bg-opacity-50">Cancel</button>
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
          {data && data.map((item, index)=>(
            <CoaTableItem key={index} item={item}/>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}
