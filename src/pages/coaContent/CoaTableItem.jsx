import React, {useState} from 'react'

export default function CoaTableItem({item}) {
  const [expand, setExpand] = useState(false);
  if (item.children){
    return(
        <React.Fragment>
            <tr 
            className='space-y-4'
            onClick={()=>setExpand(!expand)}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.size}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
            </tr>
            {expand && item.children.map((children, index)=>(
                <CoaTableItem key={index} item = {children} className="pl-10"/>
            ))}
        </React.Fragment>
      )
  }
  else{
    return(
        <tr className='space-y-4'>
          <td className="pl-20">{item.name}</td>
          <td className="px-6">{item.size}</td>
          <td className="px-6">{item.date}</td>
        </tr>
      )
  }
}
