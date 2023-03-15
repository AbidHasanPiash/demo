import React, { useState } from 'react'
import {HiOutlineBell} from 'react-icons/hi'

export default function Sidebar({tab}) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const handleMenuItemClick = (t) => {
    setActiveTab(t);
    tab(t);
  }
  const menuItems = [
    {id:1, name:'Dashboard', icon:<HiOutlineBell/>},
    {id:2, name:'Report', icon:<HiOutlineBell/>},
    {id:3, name:'Products', icon:<HiOutlineBell/>},
    {id:4, name:'Order', icon:<HiOutlineBell/>},
    {id:5, name:'Purchase', icon:<HiOutlineBell/>},
    {id:6, name:'Setup', icon:<HiOutlineBell/>},
    {id:7, name:'Company', icon:<HiOutlineBell/>},
    {id:8, name:'Suplier', icon:<HiOutlineBell/>},
    {id:9, name:'Employe', icon:<HiOutlineBell/>}
  ]
  return (
    <aside className="bg-gray-700 text-gray-300 w-64 h-screen px-2 py-6">
    <nav>
      <ul>
        {menuItems.map(item=>(
          <li 
          key={item.id} 
          className={`${ activeTab === item.name ? 'bg-blue-500' : 'hover:bg-gray-800' }
            flex items-center justify-start text-lg space-x-2 p-2 rounded`}
          onClick={()=>{handleMenuItemClick(item.name)}} >
            <div>{item.icon}</div>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
  )
}
