import React, { useState } from 'react'
import logo from '../media/logo.png'
import profile from '../media/profile.png'
import {HiOutlineBell} from 'react-icons/hi'
import {RiSearch2Line} from 'react-icons/ri'
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
      <div>
        <div className='flex items-center justify-start border-b border-gray-500 space-x-2 p-3 pl-4'>
          <img 
            className='w-8 rounded-full ring-2 ring-white'
            src={logo} 
            alt="profile" 
          />
          <h1 className='text-xl font-semibold'>CreativeHI <span className='text-sm text-gray-400'>demo</span></h1>
        </div>
        <div className='flex items-center justify-start border-b border-gray-500 space-x-2 p-4 pl-4'>
          <img 
            className='w-8 rounded-full'
            src={profile} 
            alt="profile" 
          />
          <h1 className='text-lg'>Elon Musk</h1>
        </div>
        <div className='flex items-center justify-start border border-gray-500 my-4 rounded'>
          <input 
            type="text" 
            placeholder='Search' 
            className='w-full h-8 bg-gray-600 rounded-l outline-none pl-2 border-r border-gray-500 focus:ring-1'/>
          <RiSearch2Line className='w-14 text-white '/>
        </div>
      </div>
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
