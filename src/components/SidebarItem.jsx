import { useState } from "react"
import {RiArrowLeftSLine} from 'react-icons/ri'
import { NavLink, useLocation } from "react-router-dom";

export default function SidebarItem({item, tab, aTab, isSidebarOpen}){
    const location = useLocation();
    const [expand, setExpand] = useState(false);
    const handleTab = (t) => {
        tab(t);
    }
    if(item.subItems){
        return (
            <li>
                <div onClick={() => setExpand(!expand)}>
                    <span className={`hover:bg-gray-700 flex items-center justify-between cursor-pointer rounded my-1 p-3 select-none`}>
                        <div className="flex items-center justify-center space-x-2">
                            <i className=''>{item.icon}</i>
                            <p className={`${isSidebarOpen ? 'block' : 'scale-0'} duration-300`}>{item.name}</p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            {item.message && <span className='bg-rose-600 rounded-md px-2 text-white text-right text-sm font-bold'>{item.message}</span>}
                            <RiArrowLeftSLine size={22}  className={`${isSidebarOpen ? 'block' : 'scale-0'} duration-300 ${expand && '-rotate-90'}`}/> 
                        </div> 
                    </span> 
                </div>
                <div className={`${isSidebarOpen && expand ? "block" : "hidden"}  pl-3`}>
                    { item.subItems.map((child, index) =>
                        <div key={index} onClick={()=>handleTab(child.name)}>
                            <NavLink to={child.link ? child.link : '#'}>
                                <span className={`${location.pathname === child.link ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'}  flex items-center justify-between cursor-pointer rounded my-1 p-3 select-none`}>
                                    <div className="flex space-x-2">
                                        <i className=''>{child.icon}</i>
                                        <p className={`${isSidebarOpen ? 'block' : 'scale-0'} duration-300`}>{child.name}</p> 
                                    </div> 
                                    {child.message && <span className='bg-rose-600 rounded-md px-2 text-white text-right text-sm font-bold'>{child.message}</span>}
                                </span>
                            </NavLink>
                        </div>
                    )}
                </div>
            </li>
        )
    }else{
        return (
            <li onClick={()=>handleTab(item.name)}>
                <NavLink to={item.link ? item.link : '#'}>
                    <span className={`${location.pathname === item.link ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'} flex items-center justify-between cursor-pointer rounded my-1 p-3 select-none`}>
                        <div className="flex space-x-2">
                            <i className=''>{item.icon}</i>
                            <p className={`${isSidebarOpen ? 'block' : 'scale-0'} duration-300`}>{item.name}</p>
                        </div>
                        {item.message && <span className='bg-rose-600 rounded-md px-2 text-white text-right text-sm font-bold'>{item.message}</span>}
                    </span>
                </NavLink>
                
            </li>
        )
    }
}