import { Container } from 'typedi'
import { APIProvider } from '../../app/API/APIProvider'
import { AuthAPIModule } from '../../app/API/modules/AuthAPIModule'
import { APIStatus } from '../../app/API/APIStatus'

export const useApiProvider = (): APIProvider => {
  return Container.get(APIProvider)
}

export const useAuthApi = (): AuthAPIModule => {
  return Container.get(AuthAPIModule)
}

export const useApiStatus = (): APIStatus => {
  return Container.get(APIStatus)
}
