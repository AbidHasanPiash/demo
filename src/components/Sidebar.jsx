import React from 'react'

export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-gray-500 w-64 h-screen px-4 py-6">
    <nav>
      <ul>
        <li className="mb-4">
          Dashboard
        </li>
        <li className="mb-4">
          Report
        </li>
        <li className="mb-4">
          User
        </li>
      </ul>
    </nav>
  </aside>
  )
}
