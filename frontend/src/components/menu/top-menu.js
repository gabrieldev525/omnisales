// react imports
import React from 'react'

// third imports
import {
  FiBell,
  FiSettings
} from 'react-icons/fi'

// local imports
import {
  Container,
  ImgUser
} from './styles'

export default function topMenu() {
  return (
    <Container>
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
      <ImgUser />
    </Container>
  )
}