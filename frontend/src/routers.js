// react imports
import React from 'react'

// project imports
import MainPage from './containers/main'

// third imports
import {
  FiAirplay
} from 'react-icons/fi'

export const routes = [
  {
    path: '/',
    component: MainPage,
    exact: true,
    menu: true,
    name: 'Início',
    icon: <FiAirplay />
  },
]

export default routes