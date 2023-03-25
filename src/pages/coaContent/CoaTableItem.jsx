import React, {useState} from 'react'
import {AiFillFolderAdd, AiFillFolderOpen, AiOutlineFileText} from 'react-icons/ai';
import {BiRightArrow} from 'react-icons/bi';
import {VscTriangleDown} from 'react-icons/vsc';
import {RxDot} from 'react-icons/rx';

export default function CoaTableItem({item}) {
  const [activeRow, setActiveRow] = useState();
  console.log(activeRow);
  const [expand, setExpand] = useState(false);
  const itemNameStyle =`px-6 whitespace-nowrap flex cursor-pointer
                        ${item.level === 1  && 'ml-3'}
                        ${item.level === 2  && 'ml-6'}
                        ${item.level === 3  && 'ml-9'}
                        ${item.level === 4  && 'ml-12'}`
  if (item.children){
    return(
        <React.Fragment>
            <tr>
                <td className={itemNameStyle}>
                  <div className='flex items-center justify-center space-x-2'>
                    {expand 
                      ? <span onClick={()=>setExpand(!expand)} className='flex items-center justify-center'><VscTriangleDown size={15}/> <AiFillFolderOpen size={25}/> </span> 
                      : <span onClick={()=>setExpand(!expand)} className='flex items-center justify-center'><BiRightArrow size={15}/> <AiFillFolderAdd size={25}/> </span> 
                    }
                  </div>
                </td>
                <td className="px-6 whitespace-nowrap"><p onClick={()=>setActiveRow(item.name)}>{item.name}</p></td>
                <td className="px-6 whitespace-nowrap">{item.size}</td>
                <td className="px-6 whitespace-nowrap">{item.date}</td>
                <td className="px-6 whitespace-nowrap">{item.level}</td>
            </tr>
            {expand && item.children.map((children, index)=>(
              <CoaTableItem key={index} item = {children} className="bg-gray-500"/>
            ))}
        </React.Fragment>
      )
  }
  else{
    return(
        <tr>
          <td className={itemNameStyle}><RxDot/></td>
          <td className="px-6 whitespace-nowrap">
            <div className='flex items-center justify-start space-x-2'>
              <AiOutlineFileText/>
              <p onClick={()=>setActiveRow(item.name)}>{item.name}</p>
            </div>
          </td>
          <td className="px-6 whitespace-nowrap">{item.size}</td>
          <td className="px-6 whitespace-nowrap">{item.date}</td>
          <td className="px-6 whitespace-nowrap">{item.level}</td>
        </tr>
      )
  }
}
