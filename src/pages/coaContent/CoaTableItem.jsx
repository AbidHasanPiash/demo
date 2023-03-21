import React, {useState} from 'react'
import {BiRightArrow} from 'react-icons/bi';

export default function CoaTableItem({item}) {
  const [expand, setExpand] = useState(false);
  const itemNameStyle =`px-6 whitespace-nowrap flex
                        ${item.level === 1  && 'ml-3'}
                        ${item.level === 2  && 'ml-6'}
                        ${item.level === 3  && 'ml-9'}
                        ${item.level === 4  && 'ml-12'}`
  if (item.children){
    return(
        <React.Fragment>
            <tr onClick={()=>setExpand(!expand)}>
                <td className={itemNameStyle}><BiRightArrow/><p>{item.name}</p></td>
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
          <td className={itemNameStyle}>{item.name}</td>
          <td className="px-6 whitespace-nowrap">{item.size}</td>
          <td className="px-6 whitespace-nowrap">{item.date}</td>
          <td className="px-6 whitespace-nowrap">{item.level}</td>
        </tr>
      )
  }
}
