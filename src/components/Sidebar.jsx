import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../media/logo.png'
import profile from '../media/profile.png'
import SidebarItem from './SidebarItem';

//React Icons
import {HiOutlineLogout, HiOutlineShoppingBag} from 'react-icons/hi'
import {RiSearch2Line, RiBuilding2Line} from 'react-icons/ri'
import {RxDashboard} from 'react-icons/rx'
import {GiMedicines} from 'react-icons/gi'
import {CgListTree} from 'react-icons/cg'
import {BsBox, BsPeople} from 'react-icons/bs'
import {MdOutlinePlaylistAddCheckCircle, MdOutlineSettingsSuggest, MdOutlineCategory} from 'react-icons/md'
import {TbReportSearch, TbBrandProducthunt, TbBabyBottle, TbTruckDelivery} from 'react-icons/tb'
import {CiMenuKebab, CiEdit} from 'react-icons/ci'

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


  const [activeTab, setAtciveTab] = useState('Dashboard');
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuItemClick = (t) => {
    tab(t.name);
    setAtciveTab(t);
  }

  const menuItems = [
    { id:1, name:'Dashboard', link:'/', icon:<RxDashboard size={22}/> },
    { id:2, name:'Report',  link:'/report', icon:<TbReportSearch size={22}/> },
    { id:3, name:'Chart of Account',  link:'/chartofaccount', icon:<CgListTree size={22}/> },
    { id:3, name:'Chart of Account View',  link:'/chartofaccountview', icon:<CgListTree size={22}/> },
    { id:4, name:'Products', message:'new', icon:<TbBrandProducthunt size={22}/>, 
      subItems:[
        {id:1, name:'Pharmacy', link:'/pharmacy',  icon:<GiMedicines size={22}/>},
        {id:2, name:'Non-Pharmacy', message:'new', link:'/non-pharmacy', icon:<TbBabyBottle size={22}/>}
      ]},
    { id:5, name:'Order', link:'/order', icon:<MdOutlinePlaylistAddCheckCircle size={22}/> },
    { id:6, name:'Purchase', link:'/purchase', icon:<HiOutlineShoppingBag size={22}/> },
    { id:7, name:'Setup', icon:<MdOutlineSettingsSuggest size={22}/>, 
      subItems:[
        {id:1, name:'Category', link:'/category',  icon:<MdOutlineCategory size={22}/>},
        {id:2, name:'Box', link:'/box', icon:<BsBox size={22}/>}
      ]},
    { id:8, name:'Company', link:'/company', icon:<RiBuilding2Line size={22}/> },
    { id:9, name:'Suplier', link:'/suplier', icon:<TbTruckDelivery size={22}/>},
    { id:10, name:'Employe', link:'/employe', icon:<BsPeople size={22}/> }
  ]
  return (
    <aside className={`bg-gray-800 text-gray-300 duration-300 ${isSidebarOpen? 'w-64' : 'w-20'} h-full px-2`}>
      <div>
        {/* Company profile */}
        <div className={`flex items-center justify-start border-b border-gray-500 space-x-2 p-3 pl-3`}>
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
        <div className='flex items-center justify-between border-b border-gray-500 p-4 pl-3'>
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
        <div className={`${isSidebarOpen ? 'block' : 'hidden'} duration-300 flex items-center justify-start border border-gray-500 my-3 rounded`}>
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
