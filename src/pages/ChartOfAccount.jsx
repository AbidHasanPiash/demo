import React from "react";
import CoaTableItem from "./coaContent/CoaTableItem";

export default function ChartOfAccount() {
  const data = [
    { id: 1, name: "C", size: "", date: "02/19/2010", children: [
        { id: 11, name: "Program Files", size: "120MB", date: "03/20/2010", 
          children: [
            { id: 111, name: "Java", size: "", date: "01/13/2010", state: "closed", 
              children: [
                { id: 1111, name: "java.exe", size: "142KB", date: "01/13/2010", },
                { id: 1112, name: "jawt.dll", size: "5KB", date: "01/13/2010", },
              ],
            },
            { id: 122, name: "MySQL", size: "", date: "01/13/2010", state: "closed",
              children: [
                { id: 221, name: "my.ini", size: "10KB", date: "02/26/2009", },
                { id: 222, name: "my-huge.ini", size: "5KB", date: "02/26/2009", },
                { id: 223, name: "my-large.ini", size: "5KB", date: "02/26/2009", },
              ],
            },
          ],
        },
        { id: 12, name: "eclipse", size: "", date: "01/20/2010",
          children: [
            { id: 121, name: "eclipse.exe", size: "56KB", date: "05/19/2009", },
            { id: 122, name: "eclipse.ini", size: "1KB", date: "04/20/2010", },
            { id: 123, name: "notice.html", size: "7KB", date: "03/17/2005", },
          ],
        },
      ],
    },
  ];
  return (
  <div className='text-4xl'>
    <h1>data</h1>
    <div className="w-3/4">
      <table className='min-w-full table-fixed border-collapse divide-y divide-gray-200'>
        <thead className="bg-gray-50">
          <tr>
            <th className="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Yum</th>
            <th className="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Size</th>
            <th className="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index)=>(
            <CoaTableItem key={index} item={item}/>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}
