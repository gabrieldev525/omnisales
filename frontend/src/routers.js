// react imports
import React from 'react'

// project imports
import MainPage from './containers/main'
import DetailsScreen from './components/details-screen/detailsScreen'

// third imports
import {
  FiAirplay,
  FiTrendingUp
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
  {
    path: '/product/detail',
    component: DetailsScreen,
    exact: false,
    menu: true,
    name: 'Detalhe do produto',
    icon: <FiTrendingUp />
  },
]

export default routes