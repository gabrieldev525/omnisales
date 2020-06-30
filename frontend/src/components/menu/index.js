// react imports
import React from 'react'

// local imports
import SideMenu from './side-menu'
import TopMenu from './top-menu'
import {
  ContainerMenu,
  ContainerTopMenu
} from './styles.js'

export default function Menu({ children }) {
  return (
    <ContainerMenu>
      <SideMenu />
      <ContainerTopMenu>
        <TopMenu />

        {children}
      </ContainerTopMenu>
    </ContainerMenu>
  )
}
