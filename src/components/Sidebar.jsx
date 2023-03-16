import React, { useState } from 'react'
import {HiOutlineBell} from 'react-icons/hi'
import SidebarItem from './SidebarItem';

export default function Sidebar({tab}) {
  const [activeTab, setAtciveTab] = useState({});
  const handleMenuItemClick = (t) => {
    tab(t.name);
    setAtciveTab(t);
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
      <ul className='flex flex-col'>
        {menuItems.map((item, index) => 
          <SidebarItem
            key={index} 
            item={item} 
            tab = {handleMenuItemClick} 
            aTab = {activeTab}
          />
        ) }
      </ul>
    </nav>
  </aside>
  )
}
