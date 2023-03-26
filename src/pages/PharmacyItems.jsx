import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { MdDoubleArrow } from "react-icons/md";

export default function PharmacyItems() {
  const {
    isLoading,
    data: pharmacyItems,
    error,
  } = useFetch(`http://localhost:8000/medicines`);
  isLoading && <div>Loading...</div>;
  error && <div>Error: {error.message}</div>;
  (!pharmacyItems || !pharmacyItems?.length) && <div>No data found</div>;

  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((i) => i !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  return (
    <div className="m-3 w-full h-full">
      <div>
        <h1>PharmacyItems</h1>
      </div>
      <div className="overflow-y-scroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                generic
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                company
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                stock
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                boxSize
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                tp
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                mrp
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pharmacyItems.map((item, index) => (
              <>
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <MdDoubleArrow
                      onClick={() => toggleRow(index)}
                      className="border cursor-pointer"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.generic}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.boxSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.tp}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.mrp}</td>
                </tr>
                {expandedRows.includes(index) && (
                  <tr>
                    <td colSpan={100}>Extra information for {item.name}</td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
