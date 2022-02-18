import { gql } from "@apollo/client"

export const GET_PERSON = gql`
  query GetPerson {
    personCollection {
      items {
        name
        age
      }
    }
  }
`

export const PageIds = {
  contact: "5kD80R2weogeIEO1Le3mKB",
  about: "5nLpOh1F6ecmXKt5ZqIu38",
  home: "29mtGGGWlCEuWzBIz5rlzL",
}

export const GET_PAGE = gql`
  query GetPage($id: String!) {
    page(id: $id) {
      title
      description
    }
  }
`
