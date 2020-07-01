// react imports
import React from 'react'
import { Link } from 'react-router-dom'

// project imports
import routers from '../../routers'

// local imports
import {
  ContainerSideMenu,
  MenuItem
} from './styles'

export default function sideMenu() {
  return (
    <ContainerSideMenu>
      <ul>
        {
          routers.map((route, index) => {
            if (route.menu)
              return (
              <MenuItem key={index}>
                {
                  route.path ? (
                    <Link to={route.path}>{route.icon && route.icon}</Link>
                  ) : (
                    <span>{route.icon && route.icon}</span>
                  )
                }
              </MenuItem>
            )
          })
        }
      </ul>
    </ContainerSideMenu>
  )
}