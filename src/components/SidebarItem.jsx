import { useState } from "react"
import {RiArrowLeftSLine} from 'react-icons/ri'
import { Link } from "react-router-dom";

export default function SidebarItem({item, tab, aTab}){
    const [expand, setExpand] = useState(false);
    const handleTab = (t) => {
        tab(t);
    }
    // const [mainActiveTab, setMainAtciveTab] = useState(null);
    // const [subActiveTab, setSubAtciveTab] = useState(null);
    // const handleMenuItemClick = (mainItem) => {
    //     tab(mainItem.name);
    //     setMainAtciveTab(mainItem.name);
    //     console.log('main: ', mainActiveTab);
    // }
    // const handleSubMenuItemClick = (subItem) => {
    //     tab(subItem.name);
    //     setSubAtciveTab(subItem.name);
    //     console.log('sub: ', subActiveTab);
    // }
    if(item.subItems){
        return (
            <li>
                <div onClick={() => setExpand(!expand)}>
                    <span className={`hover:bg-gray-700 flex items-center justify-between cursor-pointer rounded my-1 p-2 select-none`}>
                        
                            <div className="flex items-center justify-center space-x-2">
                                <i className=''>{item.icon}</i>
                                <p>{item.name}</p>
                            </div>
                        <RiArrowLeftSLine/>  
                    </span> 
                </div>
                <div className={`${expand ? "block" : "hidden"}  pl-3`}>
                    { item.subItems.map((child, index) =>
                        <div key={index} onClick={()=>handleTab(child)}>
                            <Link to={child.link ? child.link : '#'}>
                                <span
                                    className={`hover:bg-gray-700 flex items-center justify-start cursor-pointer rounded my-1 p-2 space-x-2 select-none`}>
                                    <i className=''>{child.icon}</i>
                                    <p>{child.name}</p>  
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </li>
        )
    }else{
        return (
            <li onClick={()=>handleTab(item)}>
                <Link to={item.link ? item.link : '#'}>
                    <span
                        className={`hover:bg-gray-700 flex items-center justify-start cursor-pointer rounded my-1 p-2 space-x-2 select-none`}>
                        <i className=''>{item.icon}</i>
                        <p>{item.name}</p>
                    </span>
                </Link>
                
            </li>
        )
    }
}