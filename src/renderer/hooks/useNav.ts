import { Container } from 'typedi'
import { NavController } from '../../app/NavController'

export const useNav = () => {
  return Container.get(NavController)
}
