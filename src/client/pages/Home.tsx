import { gql } from "@apollo/client"
import { useGetPersonQuery } from "../../schema"

gql`
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
  const { loading, data, error } = useGetPersonQuery()

  if (loading) return <div>Loading...</div>
  if (!loading && !data) return <div>No results</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>Home</h1>
      {`Hi, I'm ${data?.personCollection?.items[0]?.name} and I'm ${data?.personCollection?.items[0]?.age} years old`}
    </div>
  )
}

export default Home
