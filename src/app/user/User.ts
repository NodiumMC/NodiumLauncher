import { Service } from 'typedi'
import { GameProfile } from './GameProfile'

@Service()
export class User {
  // User related
  nid?: string
  username: string = 'Steelex'
  verified?: boolean
  avatar?: string
  coins?: number
  skinPack?: string[]
  capePack?: string[]
  gameProfiles?: GameProfile[] = [new GameProfile()]
  // Advanced
  private isAuth: boolean = false
  p
}
