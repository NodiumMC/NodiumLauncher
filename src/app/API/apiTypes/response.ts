import { ResultCode } from '../ResultCode'

export interface Restponse<D, E = any, R = ResultCode> {
  resultCode: R
  error: E | null,
  data: D | null
}
