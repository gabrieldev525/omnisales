// react imports
import React from 'react'

// project imports
import MainPage from './containers/main'

// third imports
import {
  FiAirplay
} from 'react-icons/fi'
import {
  MdDashboard
} from 'react-icons/md'



import Tabela from './components/tabela/table'
export const routes = [
  {
    path: '/',
    component: MainPage,
    exact: true,
    menu: true,
    name: 'Início',
    icon: <FiAirplay />
  },

  {
    path: '/product/list',
    component: Tabela,
    exact: true,
    menu: true,
    name: 'Produtos',
    icon: <MdDashboard  />
  },
]

export default routes