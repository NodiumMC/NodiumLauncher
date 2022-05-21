import { AxiosResponse } from 'axios'
import { Restponse } from '../apiTypes/response'

/**
 * Equivalent of .then(response => response.data.data)
 * @param res
 */
export const rds = <T>(res: AxiosResponse<Restponse<T>>): Restponse<T> | null => res?.data
