import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
query RootQueryType {
    usersRooms {
        rooms {
          id
          name
        }
      }
    }
`

export const GET_SINGLE_ROOM = gql`
  query RootQueryType($roomId: ID!) {
        room(id: $roomId) {
            id
            messages {
              body
              id
              insertedAt
            }
            user {
              email
              firstName
              id
              lastName
              role
            }
        }
    }
`