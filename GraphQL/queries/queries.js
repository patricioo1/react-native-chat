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
query GetSingleRoom($roomId: ID!) {
  room(id: $roomId) {
      id
      user {
        firstName
        id
      }
      messages {
        body
        id
        insertedAt
        user {
          email
          firstName
          id
          lastName
          role
        }
      }
  }
}
`

export const GET_SINGLE_ROOM_MESSAGES = gql`
  query RootQueryType($roomId: ID!) {
    room(id: $roomId) {
      messages{
        body
        insertedAt
      }
    }
  }
`