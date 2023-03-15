import React, { useState } from 'react'
import logo from '../media/logo.png'
import profile from '../media/profile.png'
import {HiOutlineBell} from 'react-icons/hi'
import {RiArrowLeftSLine, RiSearch2Line} from 'react-icons/ri'

export default function SidebarDemo({tab}) {

  const [mainActiveTab, setMainActiveTab] = useState(null);
  const [subActiveTab, setSubActiveTab] = useState(null);
  const [isExpand, setIsExpand] = useState(false);

  const handleMenuItemClick = (mainItem) => {
    setMainActiveTab(mainItem.name);
    !mainItem.subItems && tab(mainItem.name);
    !mainItem.subItems && setSubActiveTab(null);
    mainItem.subItems && setIsExpand(!isExpand);
  }
  const handleSubMenuItemClick = (subItem) => {
    tab(subItem.name);
    setSubActiveTab(subItem.name);
  }

  console.log(mainActiveTab, subActiveTab);

  //Menu Items
  const menuItems = [
    {
      id:1, 
      name:'Dashboard',
      category:'main',
      icon:<HiOutlineBell size={25} />
    },
    {
      id:2, 
      name:'Products',
      category:'main',
      icon:<HiOutlineBell size={25}/>,
      subItems:[
        {
          id:'1',
          name:'Pharmacy',
          category: 'sub',
          icon:<HiOutlineBell size={25}/>
        },
        {
          id:'2',
          name:'Dipartmental',
          category: 'sub',
          icon:<HiOutlineBell size={25}/>
        }
      ]
    },
    {
      id:3, 
      name:'Setup',
      category:'main',
      icon:<HiOutlineBell size={25}/>,
      subItems:[
        {
          id:'1',
          name:'Category',
          category: 'sub',
          icon:<HiOutlineBell size={25}/>
        },
        {
          id:'2',
          name:'Box',
          category: 'sub',
          icon:<HiOutlineBell size={25}/>
        }
      ]
    }
  ]
  return (
    <aside className="bg-gray-700 text-gray-300 w-64 h-screen px-2">
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
        <ul>
          {menuItems.map(item=>(
            <li key={item.id} >
              <span 
              onClick={()=>handleMenuItemClick(item)} 
              className={`${ mainActiveTab === item.name ? 'bg-blue-500' : 'hover:bg-gray-800' } flex items-center justify-start cursor-pointer rounded my-1 p-2 space-x-2`}>
                <i className=''>{item.icon}</i>
                <p>{item.name}</p>
                {item.subItems && <RiArrowLeftSLine/> }
              </span>
              {item.subItems && item.subItems.map(subItem=>(
                <div key={subItem.id} className={` ${isExpand ? 'block' : 'hidden'} pl-3`}>
                  <span 
                  onClick={()=>handleSubMenuItemClick(subItem)} 
                  className={`${ subActiveTab === subItem.name ? 'bg-neutral-500' : 'hover:bg-gray-800' } flex items-center justify-start cursor-pointer rounded my-1 p-2 space-x-2`}>
                    <i className=''>{subItem.icon}</i>
                    <p>{subItem.name}</p>
                  </span>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
