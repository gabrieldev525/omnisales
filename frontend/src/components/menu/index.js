// react imports
import React from 'react'
import { Link } from 'react-router-dom'

// project imports
import routers from '../../routers'

// local imports
import {
  Container,
  MenuItem
} from './styles'

export default function Menu({ children }) {
  return (
    <>
      <Container>
        <ul>
          {
            routers.map((route, index) => {
              if (route.menu)
                return (
                  <MenuItem key={index}>
                    {
                      route.path ? (
                        <Link to={route.path}>{route.name && route.name}</Link>
                      ) : (
                          <span>{route.name && route.name}</span>
                        )
                    }
                  </MenuItem>
                )
            })
          }
        </ul>
      </Container>

      {children}
    </>
  )
}
