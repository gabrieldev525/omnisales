// react imports
import React from 'react'

// project imports
import MainPage from './containers/main'
import ProductDetail from './containers/product/product-detail'
import CustomDashboard from './containers/dashboard'
import Leads from './containers/leads/config-lead'

// third imports
import {
  FiAirplay,
  FiTrendingUp
} from 'react-icons/fi'
import {
  MdDashboard,
  MdRecordVoiceOver
} from 'react-icons/md'


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
  {
    path: '/product/test/leads',
    component: Leads,
    exact: false,
    menu: true,
    name: 'Detalhe do produto',
    icon: <MdRecordVoiceOver />
  },
]

export default routes