import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {RiMenuFoldFill,RiMenuUnfoldFill, RiMessageLine, RiSearch2Line} from 'react-icons/ri'
import {HiOutlineBell, HiArrowsExpand} from 'react-icons/hi'

export default function Header() {
    const [menuClicked, setMenuclicked] = useState(false);
  return (
    <div className='fixed left-0 top-0 w-full px-6 py-3 text-xl text-gray-700 shadow-md'>
        <div className='flex items-center justify-between'>
            <div className='relative flex space-x-20'>
                <div>
                    {menuClicked ? 
                        <RiMenuFoldFill onClick={()=>setMenuclicked(!menuClicked)} className="absolute left-0 pl-3 w-8 h-8 cursor-pointer" /> 
                        :
                        <RiMenuUnfoldFill onClick={()=>setMenuclicked(!menuClicked)} className="absolute left-0 pl-3 w-8 h-8 cursor-pointer" />
                    }
                </div>
                <Link to={'/'}>Home</Link>
            </div>
            <div className='flex space-x-8'>
                <button> <RiSearch2Line/> </button>
                <button> <RiMessageLine/> </button>
                <button> <HiOutlineBell/> </button>
                <button> <HiArrowsExpand/> </button>
            </div>
        </div>
    </div>
  )
}
