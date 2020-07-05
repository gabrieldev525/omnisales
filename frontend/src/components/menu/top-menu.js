// react imports
import React from 'react'

// third imports
import {
  FiBell,
  FiSettings
} from 'react-icons/fi'

// local imports
import '../../static/css/menu.scss'

export default function topMenu() {
  return (
    <div className='container'>
      <span>Produtos</span>
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