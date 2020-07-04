// react imports
import React from 'react'

// project imports
import MainPage from './containers/main'
import ProductDetail from './containers/product/product-detail'

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
    component: ProductDetail,
    exact: false,
    menu: true,
    name: 'Detalhe do produto',
    icon: <FiTrendingUp />
  },
]

export default routes