import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { fullScreen } from './FullScreen'
import {RiMenuFoldFill,RiMenuUnfoldFill, RiMessageLine, RiSearch2Line} from 'react-icons/ri'
import {BiBell, BiExpand, BiCollapse} from 'react-icons/bi'

export default function Header({setIsSidebarOpen}) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [menuClicked, setMenuclicked] = useState(false);
  return (
    <header className='w-full'>
        <div className='px-6 py-3 text-xl text-gray-700 shadow-md'>
            <div className='flex w-full items-center justify-between'>
                <div className='relative flex space-x-20'>
                    <div>
                        {menuClicked ? 
                            <RiMenuFoldFill onClick={()=>{setIsSidebarOpen(!menuClicked); setMenuclicked(!menuClicked);}} className="absolute left-0 pl-3 w-8 h-8 cursor-pointer" /> 
                            :
                            <RiMenuUnfoldFill onClick={()=>{setIsSidebarOpen(!menuClicked); setMenuclicked(!menuClicked);}} className="absolute left-0 pl-3 w-8 h-8 cursor-pointer" />
                        }
                    </div>
                    <Link to={'/'}>Home</Link>
                </div>
                <div className='flex space-x-8'>
                    <button> <RiSearch2Line/> </button>
                    <button> <RiMessageLine/> </button>
                    <button> <BiBell/> </button>
                    <button onClick={()=>fullScreen(isFullScreen, setIsFullScreen)}> {isFullScreen ? <BiCollapse/> : <BiExpand/>} </button>
                </div>
            </div>
        </div>
    </header>
  )
}
