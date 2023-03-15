import React, { useState } from 'react'
import {HiOutlineBell} from 'react-icons/hi'
import {RiArrowLeftSLine} from 'react-icons/ri'

export default function Sidebar({tab}) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isExpand, setIsExpand] = useState(false);
  const handleMenuItemClick = (t) => {
    setActiveTab(t);
    tab(t);
  }
  const menuItems = [
    {
      id:1, 
      name:'Dashboard', 
      icon:<HiOutlineBell/>
    },
    {
      id:2, 
      name:'Report', 
      icon:<HiOutlineBell/>
    },
    {
      id:3, 
      name:'Products', 
      icon:<HiOutlineBell/>,
      subItems:[
        {id:1, name:'Pharmacy', icon:<HiOutlineBell/>},
        {id:2, name:'Non-Pharmacy', icon:<HiOutlineBell/>}
      ]
    },
    {
      id:4, 
      name:'Order', 
      icon:<HiOutlineBell/>
    },
    {
      id:5, 
      name:'Purchase', 
      icon:<HiOutlineBell/>
    },
    {
      id:6, 
      name:'Setup', 
      icon:<HiOutlineBell/>,
      subItems:[
        {id:1, name:'Category', icon:<HiOutlineBell/>},
        {id:2, name:'Box', icon:<HiOutlineBell/>}
      ]
    },
    {
      id:7, 
      name:'Company', 
      icon:<HiOutlineBell/>
    },
    {
      id:8, 
      name:'Suplier', 
      icon:<HiOutlineBell/>},
    {
      id:9, 
      name:'Employe', 
      icon:<HiOutlineBell/>
    }
  ]
  return (
    <aside className="bg-gray-700 text-gray-300 w-64 h-screen px-2 py-6">
    <nav>
      <ul>
        {menuItems.map(item=>(
          <li
            key={item.id} 
            onClick={()=>{
                if (!item.subItems) {
                  handleMenuItemClick(item.name);
                }
                else {
                  setIsExpand(!isExpand);
                }
              }} 
          >
            <span className={`${ activeTab === item.name ? 'bg-blue-500' : 'hover:bg-gray-800' } text-lg space-x-2 p-2 rounded flex items-center justify-start`}>
              <div>{item.icon}</div>
              <p>{item.name}</p>
              {item.subItems && <i>
                <RiArrowLeftSLine className={`${isExpand ? '-rotate-90' : ''}`}/>
              </i>}
            </span>
            
            {item.subItems && (
              <ul className={`${isExpand ? 'block' : 'hidden'} ml-4 mt-2 transition-all duration-500 ease-in-out`}>
                {item.subItems.map((child) => (
                  <li
                  key={child.id}
                  onClick={()=>{setIsExpand(false); handleMenuItemClick(child.name);}}>
                    <span className={`${ activeTab === child.name ? 'bg-blue-500' : 'hover:bg-gray-800' } text-lg space-x-2 p-2 rounded flex items-center justify-start`}>
                      <div>{child.icon}</div>
                      <p>{child.name}</p>
                    </span>
                  </li>
                ))}
              </ul>
            )}


          </li>
        ))}
      </ul>
    </nav>
  </aside>
  )
}
