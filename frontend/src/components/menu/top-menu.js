// react imports
import React from 'react'

// third imports
import {
  FiBell,
  FiSettings
} from 'react-icons/fi'

// local imports
import '../../static/css/every-menu-style.scss'

export default function topMenu() {
  return (
    <div className='container'>
      <span>Dashboard</span>
      <ul>
        <li>
          <FiBell
            color='rgba(0, 0, 0, .6)'
            size={20} />
        </li>
        <li>
          <FiSettings
            color='rgba(0, 0, 0, .6)'
            size={20} />
        </li>
      </ul>
      <p className='img-user'></p>
    </div>
  )
}