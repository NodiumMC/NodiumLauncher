import { gql } from '@apollo/client'

gql`
  query Me {
    me {
      nid
      username
      verified
      profile {
        avatar {
          data
          mimeType
        }
        coins
        violations {
          code
          description
          issuedBy {
            username
          }
        }
        roles {
          name
          permissions
        }
        gameProfiles {
          nickname
          uuid
          nicknameChangedAt
          skinId
          capeId
          slim
        }
      }
    }
  }
`
