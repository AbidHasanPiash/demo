import React from 'react'

export default function Sidebar({tab}) {
  const handleMenuItemClick = (t) => {
    tab(t);
  }
  const menuItems = [
    {id:1, name:'Dashboard', icon:''},
    {id:2, name:'Report', icon:''},
    {id:3, name:'Products', icon:''},
    {id:4, name:'Order', icon:''},
    {id:5, name:'Purchase', icon:''},
    {id:6, name:'Setup', icon:''},
    {id:7, name:'Company', icon:''},
    {id:8, name:'Suplier', icon:''},
    {id:9, name:'Employe', icon:''}
  ]
  return (
    <aside className="bg-gray-900 text-gray-500 w-64 h-screen px-4 py-6">
    <nav>
      <ul>
        {menuItems.map(item=>(
          <li 
          key={item.id} 
          onClick={()=>{handleMenuItemClick(item.name)}} 
          className="mb-4">
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  </aside>
  )
}
