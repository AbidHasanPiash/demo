import { useState } from "react"
import {RiArrowLeftSLine} from 'react-icons/ri'

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
                    <span className={`hover:bg-gray-600 flex items-center justify-between cursor-pointer rounded my-1 p-2`}>
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
                            <span
                                className={`hover:bg-gray-800 flex items-center justify-start cursor-pointer rounded my-1 p-2 space-x-2`}>
                                <i className=''>{child.icon}</i>
                                <p>{child.name}</p>  
                            </span>
                        </div>
                    )}
                </div>
            </li>
        )
    }else{
        return (
            <li onClick={()=>handleTab(item)}>
                <span
                    className={`hover:bg-gray-800 flex items-center justify-start cursor-pointer rounded my-1 p-2 space-x-2`}>
                    <i className=''>{item.icon}</i>
                    <p>{item.name}</p>
                </span>
            </li>
        )
    }
}