// react imports
import React from 'react'

// project imports
import MainPage from './containers/main'
import ProductDetail from './containers/product/product-detail'
import CustomDashboard from './containers/dashboard'

// third imports
import {
  FiAirplay,
  FiTrendingUp
} from 'react-icons/fi'

export const routes = [
  {
    path: '/',
    component: CustomDashboard,
    exact: true,
    menu: true,
    name: 'Dashboards',
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