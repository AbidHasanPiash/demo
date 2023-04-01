import React, {useState} from 'react'
import {AiFillFolderAdd, AiFillFolderOpen, AiOutlineFileText} from 'react-icons/ai';
import {BiRightArrow} from 'react-icons/bi';
import {VscTriangleDown} from 'react-icons/vsc';
import {RxDot} from 'react-icons/rx';

export default function CoaTableItem({item, editable, selectedRow, handleSelectedRow, updateObjects }) {
  const [myItem, setMyItem] = useState(item);
  const handleChange = (n, v) => {
    setMyItem({ ...myItem, [n]: v });
    //updateObjects(myItem);
  }
  const [expand, setExpand] = useState(false);
  const itemNameStyle =`px-6 whitespace-nowrap flex cursor-pointer
                        ${item.level === 1  && 'ml-3'}
                        ${item.level === 2  && 'ml-6'}
                        ${item.level === 3  && 'ml-9'}
                        ${item.level >= 4  && 'ml-12'}`
  if (myItem.subRows){
    return(
        <React.Fragment>
            <tr className={`${selectedRow.id === item.id ? 'bg-yellow-300':'bg-white'}`}>
                <td className={itemNameStyle}>
                  <div onClick={()=>setExpand(!expand)} className='flex items-center justify-center space-x-2'>
                    {expand 
                      ? <span className='flex items-center justify-center'><VscTriangleDown size={15}/> <AiFillFolderOpen size={25}/> </span> 
                      : <span className='flex items-center justify-center'><BiRightArrow size={15}/> <AiFillFolderAdd size={25}/> </span> 
                    }
                  </div>
                </td>
                <td className="px-6 whitespace-nowrap"><p onClick={()=>!editable && handleSelectedRow(item)}>
                  {editable && selectedRow.id === myItem.id
                    ?<input 
                      type="text" 
                      name="name" 
                      id="name" 
                      defaultValue={myItem.name} 
                      onChange={(event)=>handleChange(event.target.name, event.target.value)}/>
                    :<span>{myItem.name}</span>
                  }
                </p></td>
                <td className="px-6 whitespace-nowrap">{myItem.size}</td>
                <td className="px-6 whitespace-nowrap">{myItem.date}</td>
                <td className="px-6 whitespace-nowrap">{myItem.level}</td>
            </tr>
            {expand && item.subRows.map((subRows, index)=>(
              <CoaTableItem 
                key={index} 
                item = {subRows} 
                editable={editable}
                selectedRow={selectedRow} 
                handleSelectedRow={handleSelectedRow}
                updateObjects ={updateObjects }
              />
            ))}
        </React.Fragment>
      )
  }
  else{
    return(
        <tr className={`${selectedRow.id === myItem.id ? 'bg-yellow-300':'bg-white'}`}>
          <td className={itemNameStyle}><RxDot/></td>
          <td className="px-6 whitespace-nowrap">
            <div className='flex items-center justify-start space-x-2'>
              <AiOutlineFileText/>
              <p onClick={()=>handleSelectedRow(myItem)}>
                {editable && selectedRow.id === myItem.id
                  ?<input 
                    type="text" 
                    name="name" 
                    id="name" 
                    defaultValue={myItem.name} 
                    onChange={(event)=>handleChange(event.target.name, event.target.value)}/>
                  :<span>{myItem.name}</span>
                }
              </p>
            </div>
          </td>
          <td className="px-6 whitespace-nowrap">{myItem.size}</td>
          <td className="px-6 whitespace-nowrap">{myItem.date}</td>
          <td className="px-6 whitespace-nowrap">{myItem.level}</td>
        </tr>
      )
  }
}
