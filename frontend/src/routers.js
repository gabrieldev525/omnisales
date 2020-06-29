// project imports
import MainPage from './containers/main'

export const routes = [
  {
    path: '/',
    component: MainPage,
    exact: true,
    menu: true,
    name: 'Início'
  },
]

export default routes