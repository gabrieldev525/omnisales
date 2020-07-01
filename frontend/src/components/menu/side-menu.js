// react imports
import React from 'react'
import { Link } from 'react-router-dom'

// project imports
import routers from '../../routers'

// local imports
import '../../static/css/menu.scss'

export default function sideMenu() {
  return (
    <div className='container-side-menu'>
      <ul>
        {
          routers.map((route, index) => {
            if (route.menu)
              return (
              <li className='menu-item' key={index}>
                {
                  route.path ? (
                    <Link to={route.path}>{route.icon && route.icon}</Link>
                  ) : (
                    <span>{route.icon && route.icon}</span>
                  )
                }
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}