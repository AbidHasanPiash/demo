import React from "react";
import {FiShoppingCart} from "react-icons/fi"
import {HiArrowCircleRight} from "react-icons/hi"
import {BiPurchaseTagAlt} from "react-icons/bi"
import {MdOutlineAssignmentReturned, MdAddTask} from "react-icons/md"
import SaleUpdateWeek from "./SaleUpdateWeek";
import SaleUpdateMonth from "./SaleUpdateMonth";
import SaleUpdateNow from "./SaleUpdateNow";

export default function Dashboard() {
  return (
    <div className="">
        {/* Card */}
      <div className="grid xl:grid-cols-4 grid-cols-2 gap-3 p-3">
        <div className="bg-sky-500 rounded-lg text-white shadow">
           <div>
                <div className="group flex items-center justify-between p-2">
                    <div>
                        <h1 className="text-4xl font-bold">240</h1>
                        <p className="py-4">Customers surves</p>
                    </div>
                    <FiShoppingCart size={80} className="text-sky-900 pr-2 opacity-40 duration-300 group-hover:scale-110"/>
                </div>
                <div className="flex items-center rounded-b-lg justify-center space-x-3 bg-sky-600 hover:bg-sky-700 p-1 cursor-pointer">
                    <button>More info</button>
                    <HiArrowCircleRight size={20}/>
                </div>
           </div>
        </div>
        <div className="bg-green-500 rounded-lg text-white shadow">
           <div>
                <div className="group flex items-center justify-between p-2">
                    <div>
                        <h1 className="text-4xl font-bold">1420</h1>
                        <p className="py-4">Items Sold</p>
                    </div>
                    <BiPurchaseTagAlt size={80} className="text-green-900 pr-2 opacity-40 duration-300 group-hover:scale-110"/>
                </div>
                <div className="flex items-center rounded-b-lg justify-center space-x-3 bg-green-600 hover:bg-green-700 p-1 cursor-pointer">
                    <button>More info</button>
                    <HiArrowCircleRight size={20}/>
                </div>
           </div>
        </div>
        <div className="bg-red-500 rounded-lg text-white shadow">
           <div>
                <div className="group flex items-center justify-between p-2">
                    <div>
                        <h1 className="text-4xl font-bold">4</h1>
                        <p className="py-4">Returns</p>
                    </div>
                    <MdOutlineAssignmentReturned size={80} className="text-red-900 pr-2 opacity-40 duration-300 group-hover:scale-110"/>
                </div>
                <div className="flex items-center rounded-b-lg justify-center space-x-3 bg-red-600 hover:bg-red-700 p-1 cursor-pointer">
                    <button>More info</button>
                    <HiArrowCircleRight size={20}/>
                </div>
           </div>
        </div>
        <div className="bg-yellow-500 rounded-lg text-white shadow">
           <div>
                <div className="group flex items-center justify-between p-2">
                    <div>
                        <h1 className="text-4xl font-bold">340</h1>
                        <p className="py-4">Items Added</p>
                    </div>
                    <MdAddTask size={80} className="text-yellow-900 pr-2 opacity-40 duration-300 group-hover:scale-110"/>
                </div>
                <div className="flex items-center rounded-b-lg justify-center space-x-3 bg-yellow-600 hover:bg-yellow-700 p-1 cursor-pointer">
                    <button>More info</button>
                    <HiArrowCircleRight size={20}/>
                </div>
           </div>
        </div>
      </div>
      {/* sale update */}
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6 m-3 mb-20">
        <SaleUpdateWeek/>
        <SaleUpdateMonth/>
        <SaleUpdateNow/>
      </div>
      
    </div>
  );
}
