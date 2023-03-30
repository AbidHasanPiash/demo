import React, { useEffect, useState } from "react";
import CoaTable from "./CoaTable";

export default function ChartOfAccount2() {
  const columns = React.useMemo(
    () => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? '👇' : '👉'}
            </span>
          ) : null,
      },
      {
        Header: 'Name',
        columns: [
          {
            Header: 'ID',
            accessor: 'id',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Size',
            accessor: 'size',
          },
          {
            Header: 'Level',
            accessor: 'level',
          },
          {
            Header: 'Date',
            accessor: 'date',
          },
        ],
      },
    ],
    []
  )
  // const mydata = [
  //   {
  //     id: 1,
  //     name: "C",
  //     size: "345",
  //     level: 1,
  //     date: "02/19/2010",
  //     children: [
  //       {
  //         id: 2,
  //         name: "Program Files",
  //         size: "120 MB",
  //         level: 2,
  //         date: "03/20/2010",
  //         children: [
  //           {
  //             id: 21,
  //             name: "Java",
  //             size: "",
  //             level: 3,
  //             date: "01/13/2010",
  //             state: "closed",
  //             children: [
  //               {
  //                 id: 211,
  //                 name: "java.exe",
  //                 size: "142 KB",
  //                 level: 4,
  //                 date: "01/13/2010",
  //               },
  //               {
  //                 id: 212,
  //                 name: "jawt.dll",
  //                 size: "5 KB",
  //                 level: 4,
  //                 date: "01/13/2010",
  //               },
  //             ],
  //           },
  //           {
  //             id: 22,
  //             name: "MySQL",
  //             size: "",
  //             level: 3,
  //             date: "01/13/2010",
  //             state: "closed",
  //             children: [
  //               { id: 221, name: "my.ini", size: "10 KB", date: "02/26/2009" },
  //               {
  //                 id: 222,
  //                 name: "my-huge.ini",
  //                 size: "5 KB",
  //                 level: 4,
  //                 date: "02/26/2009",
  //               },
  //               {
  //                 id: 223,
  //                 name: "my-large.ini",
  //                 size: "5 KB",
  //                 level: 4,
  //                 date: "02/26/2009",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         id: 3,
  //         name: "eclipse",
  //         size: "",
  //         level: 2,
  //         date: "01/20/2010",
  //         children: [
  //           {
  //             id: 31,
  //             name: "eclipse.exe",
  //             size: "56 KB",
  //             level: 3,
  //             date: "05/19/2009",
  //           },
  //           {
  //             id: 32,
  //             name: "eclipse.ini",
  //             size: "1 KB",
  //             level: 3,
  //             date: "04/20/2010",
  //           },
  //           {
  //             id: 33,
  //             name: "notice.html",
  //             size: "7 KB",
  //             level: 3,
  //             date: "03/17/2005",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   { id: 2, name: "B", size: "325", level: 1, date: "03/9/2012" },
  // ];

  const endpoint = `http://localhost:8000/coaData`;
  const [mydata, setMyData] = useState();
  useEffect(() => {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => setMyData(data))
        .catch((error) => console.error(error));
  }, [endpoint]);

  const data = React.useMemo(() => mydata, [mydata]);
  return (
    <div className="text-lg">
      <h1>data</h1>
      <div className="w-3/4 mt-20">
        {data && <CoaTable columns={columns} data={data} />}
      </div>
    </div>
  );
}
