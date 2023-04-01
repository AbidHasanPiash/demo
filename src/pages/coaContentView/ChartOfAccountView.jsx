import React, { useEffect, useMemo, useState } from "react";
import CoaTable from "./CoaTable";
import FilterColumn from "./FilterColumn";

export default function ChartOfAccount2() {
  const endpoint = `http://localhost:8000/coaData`;
  const [mydata, setMyData] = useState();
  const columns = useMemo(
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
            Filter: FilterColumn,
          },
          {
            Header: 'Name',
            accessor: 'name',
            Filter: FilterColumn,
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Size',
            accessor: 'size',
            Filter: FilterColumn,
          },
          {
            Header: 'Level',
            accessor: 'level',
            Filter: FilterColumn,
          },
          {
            Header: 'Date',
            accessor: 'date',
            Filter: FilterColumn,
          },
        ],
      },
    ],
    []
  )
  useEffect(() => {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => setMyData(data))
        .catch((error) => console.error(error));
  }, [endpoint]);
  const data = useMemo(() => mydata, [mydata]);
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setMyData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  };
  return (
    <div className="text-lg">
      <h1>data</h1>
      <div className="w-3/4 mt-20">
        {data && <CoaTable columns={columns} data={data} updateMyData={updateMyData}/>}
      </div>
    </div>
  );
}
