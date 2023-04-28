import React from 'react'
import { Link } from 'react-router-dom'

const NAVBAR = () => {
  return (
    <nav className='p-5 bg-gray-800 shadow md:flex md:items-center md:justify-between'>
      <div>
        <span className=' font-mono text-3xl text-white rounded-md px-3 py-2 font-extrabold'>
          Santisimo Sacramento
        </span>
      </div>
      <ul className='flex space-x-4'>
        <li className=' font-sans text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'> 
            <Link to='reservar'>RESERVAR</Link>
        </li>
        <li className=' font-sans text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
            <Link to='dashboard'>DASHBOARD</Link>
        </li>
        <li className=' font-sans text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
            <Link to='/'>HOME</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NAVBAR
