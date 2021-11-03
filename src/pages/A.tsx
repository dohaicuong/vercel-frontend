import { useLazyLoadQuery, graphql } from "react-relay"
import { AQuery } from "./__generated__/AQuery.graphql"

const A = () => {
  const data = useLazyLoadQuery<AQuery>(
    graphql`
      query AQuery {
        ok
      }
    `,
    {}
  )
  console.log(data)

  return (
    <>page A</>
  )
}
export default A
