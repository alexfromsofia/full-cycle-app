import { gql, useQuery } from "@apollo/client"

const GET_PERSON = gql`
  query GetPerson {
    personCollection {
      items {
        name
        age
      }
    }
  }
`

const Home = () => {
  const { loading, data, error } = useQuery(GET_PERSON)

  return (
    <div>
      <h1>Home</h1>
      {data &&
        `Hi, I'm ${data.personCollection.items[0].name} and I'm ${data.personCollection.items[0].age} years old`}
    </div>
  )
}

export default Home
