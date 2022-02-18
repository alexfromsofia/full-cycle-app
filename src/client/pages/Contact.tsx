import { useGetPageQuery } from "../../schema"
import { PageIds } from "../graphql/queries"

const Contact = () => {
  const { loading, data, error } = useGetPageQuery({
    variables: { id: PageIds.contact },
  })

  if (loading) return <div className="page">Loading...</div>
  if (!loading && !data) return <div className="page">No results</div>
  if (error) return <div className="page">{error}</div>

  return (
    <div className="page">
      <h1>{data?.page?.title}</h1>
      <p>{data?.page?.description}</p>
    </div>
  )
}

export default Contact
