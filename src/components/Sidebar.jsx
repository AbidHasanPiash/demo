import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../media/logo.png'
import profile from '../media/profile.png'
import {HiOutlineBell, HiOutlineLogout} from 'react-icons/hi'
import {RiSearch2Line} from 'react-icons/ri'
import {CiMenuKebab, CiEdit} from 'react-icons/ci'
import SidebarItem from './SidebarItem';

//Authentication
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase";

export default function Sidebar({tab, isSidebarOpen}) {

  //Check user is login or not
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
        navigate("/login");
      }
    });
  }, [navigate]);

  const Logout = () => {
    signOut(auth)
      .then(() => { navigate("/login"); })
      .catch((error) => { console.log(error); });
  };


  const [activeTab, setAtciveTab] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuItemClick = (t) => {
    tab(t.name);
    setAtciveTab(t);
  }

  const menuItems = [
    { id:1, name:'Dashboard', link:'/dashboard', icon:<HiOutlineBell/> },
    { id:2, name:'Report',  link:'/report', icon:<HiOutlineBell/> },
    { id:3, name:'Products', icon:<HiOutlineBell/>, 
      subItems:[
        {id:1, name:'Pharmacy', link:'/pharmacy',  icon:<HiOutlineBell/>},
        {id:2, name:'Non-Pharmacy', link:'/non-pharmacy', icon:<HiOutlineBell/>}
      ]},
    { id:4, name:'Order', link:'/order', icon:<HiOutlineBell/> },
    { id:5, name:'Purchase', link:'/purchase', icon:<HiOutlineBell/> },
    { id:6, name:'Setup', icon:<HiOutlineBell/>, 
      subItems:[
        {id:1, name:'Category', link:'/category',  icon:<HiOutlineBell/>},
        {id:2, name:'Box', link:'/box', icon:<HiOutlineBell/>}
      ]},
    { id:7, name:'Company', link:'/company', icon:<HiOutlineBell/> },
    { id:8, name:'Suplier', link:'/suplier', icon:<HiOutlineBell/>},
    { id:9, name:'Employe', link:'/employe', icon:<HiOutlineBell/> }
  ]
  return (
    <aside className={`bg-gray-800 text-gray-300 duration-300 ${isSidebarOpen? 'w-64' : 'w-20'} h-screen px-2`}>
      <div>
        {/* Company profile */}
        <div className='flex items-center justify-start border-b border-gray-500 space-x-2 p-3 pl-4'>
          <img 
            className='w-8 rounded-full ring-2 ring-white'
            src={logo} 
            alt="profile" 
          />
          <div className={`${isSidebarOpen ? 'block' : 'scale-0'} duration-300`}>
            <h1 className='text-xl font-semibold'>CreativeHI <span className='text-sm text-gray-400'>demo</span></h1>
          </div>
        </div>
        {/* User profile */}
        <div className='flex items-center justify-between border-b border-gray-500 p-4 pl-4'>
          <div className='flex items-center justify-start space-x-2'>
            <img 
              className='w-8 rounded-full'
              src={profile} 
              alt="profile" 
            />
            <div className={`${isSidebarOpen ? 'block' : 'scale-0'} duration-300`}>
              <h1 className='text-lg'>{authUser ? <p>{authUser.email}</p> : <p>Please Login</p>}</h1>
            </div>
            
          </div>
          <div className="relative inline-block text-right">
            <CiMenuKebab onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer hover:scale-125 duration-200'/>
            <div className={`absolute right-0 mt-2 w-56 rounded border bg-slate-700 select-none ${isOpen ? 'block' : 'hidden' }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="flex items-center justify-end space-x-3 hover:bg-slate-800 px-2 py-1 mx-2 my-1 rounded-lg" role="none">
                  <p onClick={Logout}>Log Out</p>
                  <HiOutlineLogout/>
              </div>
              <div className="flex items-center justify-end space-x-3 hover:bg-slate-800 px-2 py-1 mx-2 my-1 rounded-lg" role="none">
                  <p>Change Password</p>
                  <CiEdit/>
              </div>
            </div>
          </div>
        </div>
        {/* Search section */}
        <div className={`${isSidebarOpen ? 'block' : 'hidden'} duration-300 flex items-center justify-start border border-gray-500 my-4 rounded`}>
          <input 
            type="text" 
            placeholder='Search' 
            className='w-full h-9 bg-gray-600 rounded-l outline-none pl-2 border-r border-gray-500 focus:ring-1'/>
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
              isSidebarOpen = {isSidebarOpen}
            />
          ) }
        </ul>
      </nav>
    </aside>
  )
}
