import React, {useState} from 'react'

export default function CoaItem({item}) {
    const [expand, setExpand] = useState(false);
  if (item.children){
    return(
        <React.Fragment>
            <tr onClick={() => setExpand(!expand)}>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>{item.date}</td>
            </tr>
            {expand && item.children.map((children, index)=>(
                <CoaItem key={index} item = {children}/>
            ))}
        </React.Fragment>
      )
  }
  else{
    return(
        <tr className='space-y-4'>
          <td>{item.name}</td>
          <td>{item.size}</td>
          <td>{item.date}</td>
        </tr>
      )
  }
}
