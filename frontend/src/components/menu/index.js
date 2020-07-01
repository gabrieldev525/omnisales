// react imports
import React from 'react'

// local imports
import SideMenu from './side-menu'
import TopMenu from './top-menu'
import '../../static/css/every-menu-style.scss'

export default function Menu({ children }) {
  return (
    <div className='container-menu' >
      <SideMenu />
      <div className='container-top-menu'>
        <TopMenu />

        {children}
      </div>
    </div>
  )
}
