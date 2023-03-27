import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { MdDoubleArrow } from "react-icons/md";
import { BiMessageSquareEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { BsDatabaseGear } from "react-icons/bs";
import AddItemModal from "./pharmacyContent/AddItemModal";
import DeleteItemModal from "./pharmacyContent/DeleteItemModal";
import EditItemModal from "./pharmacyContent/EditItemModal";

export default function PharmacyItems() {
  const { isLoading, data: pharmacyItems, error, } = useFetch(`http://localhost:8000/medicines`);
  isLoading && <div>Loading...</div>;
  error && <div>Error: {error.message}</div>;
  (!pharmacyItems || !pharmacyItems?.length) && <div>No data found</div>;

  const [expandedRows, setExpandedRows] = useState([]);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [deleteableId, setIDeleteableId] = useState(null);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [editableId, setIEditableId] = useState(null);

  const toggleRow = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((i) => i !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };
  const handleDeleteButton = (id) => {
    setIsDeleteClicked(true);
    setIDeleteableId(id);
  };
  const handleEditButton = (id) => {
    setIsEditClicked(true);
    setIEditableId(id);
  };

  return (
    <div className="p-3 h-full">
      <div>
        <h1>PharmacyItems</h1>
      </div>
      <div className="text-right py-5">
        <button
          onClick={()=> setIsAddClicked(true)}
          className="px-3 border bg-blue-400 hover:bg-blue-600 text-white rounded-lg"
        >
          Add
        </button>
      </div>
      <div className="">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="w-fit"> SN </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > name </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > generic </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > category </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > company </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > stock </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > boxSize </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > tp </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > mrp </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > Action </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pharmacyItems?.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="px-6 py-4 flex items-center justify-center space-x-3">
                    <MdDoubleArrow onClick={() => toggleRow(index)} className={`${ expandedRows.includes(index) && "rotate-90" } duration-300 border cursor-pointer`}/>
                    <span>{index+1}</span>
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
                  <td className="px-3 py-4 whitespace-nowrap space-x-3">
                    <button onClick={()=> handleEditButton(item.id)}><BiMessageSquareEdit/></button>
                    <button><BsDatabaseGear/></button>
                    <button onClick={()=> handleDeleteButton(item.id)}><AiOutlineDelete/></button>
                  </td>
                </tr>
                {expandedRows.includes(index) && (
                  <tr>
                    <td colSpan={100}>Extra information for {item.name}</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {isAddClicked && (
        <div className="flex items-center justify-center">
            <AddItemModal onClose={()=>setIsAddClicked(false)}/>
        </div>
      )}
      {isEditClicked && (
        <div className="flex items-center justify-center">
            <EditItemModal editableId = {editableId} onClose={()=>setIsEditClicked(false)}/>
        </div>
      )}
      {isDeleteClicked && (
        <div className="flex items-center justify-center">
            <DeleteItemModal deleteableId = {deleteableId} onClose={()=>setIsDeleteClicked(false)}/>
        </div>
      )}
    </div>
  );
}
