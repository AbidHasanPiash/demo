import React from "react";
import CoaItem from "./coaContent/CoaItem";

export default function ChartOfAccount() {
  const data = [
    {
      id: 1,
      name: "C",
      size: "",
      date: "02/19/2010",
      children: [
        {
          id: 2,
          name: "Program Files",
          size: "120MB",
          date: "03/20/2010",
          children: [
            {
              id: 21,
              name: "Java",
              size: "",
              date: "01/13/2010",
              state: "closed",
              children: [
                {
                  id: 211,
                  name: "java.exe",
                  size: "142KB",
                  date: "01/13/2010",
                },
                {
                  id: 212,
                  name: "jawt.dll",
                  size: "5KB",
                  date: "01/13/2010",
                },
              ],
            },
            {
              id: 22,
              name: "MySQL",
              size: "",
              date: "01/13/2010",
              state: "closed",
              children: [
                {
                  id: 221,
                  name: "my.ini",
                  size: "10KB",
                  date: "02/26/2009",
                },
                {
                  id: 222,
                  name: "my-huge.ini",
                  size: "5KB",
                  date: "02/26/2009",
                },
                {
                  id: 223,
                  name: "my-large.ini",
                  size: "5KB",
                  date: "02/26/2009",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: "eclipse",
          size: "",
          date: "01/20/2010",
          children: [
            {
              id: 31,
              name: "eclipse.exe",
              size: "56KB",
              date: "05/19/2009",
            },
            {
              id: 32,
              name: "eclipse.ini",
              size: "1KB",
              date: "04/20/2010",
            },
            {
              id: 33,
              name: "notice.html",
              size: "7KB",
              date: "03/17/2005",
            },
          ],
        },
      ],
    },
  ];
  return (
  <div className="text-4xl">
    <h1>data</h1>
    <table className="items-center">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index)=>(
          <CoaItem key={index} item={item}/>
        ))}
      </tbody>
    </table>
  </div>
  );
}
