import { useState } from "react"
import {RiArrowLeftSLine} from 'react-icons/ri'
import { Link } from "react-router-dom";

export default function SidebarItem({item, tab, aTab, isSidebarOpen}){
    const [expand, setExpand] = useState(false);
    const handleTab = (t) => {
        tab(t);
    }
    if(item.subItems){
        return (
            <li>
                <div onClick={() => setExpand(!expand)}>
                    <span className={`${aTab === item.name ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'}  flex items-center justify-between cursor-pointer rounded my-1 p-3 select-none`}>
                        
                            <div className="flex items-center justify-center space-x-2">
                                <i className=''>{item.icon}</i>
                                <p className={`${isSidebarOpen ? 'block' : 'scale-0'} duration-300`}>{item.name}</p>
                            </div>
                        <RiArrowLeftSLine size={22}  className={`${isSidebarOpen ? 'block' : 'scale-0'} duration-300 ${expand && '-rotate-90'}`}/>  
                    </span> 
                </div>
                <div className={`${isSidebarOpen && expand ? "block" : "hidden"}  pl-3`}>
                    { item.subItems.map((child, index) =>
                        <div key={index} onClick={()=>handleTab(child.name)}>
                            <Link to={child.link ? child.link : '#'}>
                                <span
                                    className={`${aTab === child.name ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'}  flex items-center justify-start cursor-pointer rounded my-1 p-3 space-x-2 select-none`}>
                                    <i className=''>{child.icon}</i>
                                    <p className={`${isSidebarOpen ? 'block' : 'scale-0'} duration-300`}>{child.name}</p>  
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </li>
        )
    }else{
        return (
            <li onClick={()=>handleTab(item.name)}>
                <Link to={item.link ? item.link : '#'}>
                    <span
                        className={`${aTab === item.name ? 'bg-blue-500 text-white' : 'hover:bg-gray-700'} flex items-center justify-start cursor-pointer rounded my-1 p-3 space-x-2 select-none`}>
                        <i className=''>{item.icon}</i>
                        <p className={`${isSidebarOpen ? 'block' : 'scale-0'} duration-300`}>{item.name}</p>
                        {console.log(aTab, item.name)}
                    </span>
                </Link>
                
            </li>
        )
    }
}