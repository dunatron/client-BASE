import React, { Component } from "react"
import Link from "./Link"
import { Query } from "react-apollo"
import gql from "graphql-tag"

// const FEED_QUERY = gql`
//   {
//     links {
//       id
//       description
//       url
//     }
//   }
// `
// const FEED_QUERY = gql`
//   query {
//     feed {
//       links {
//         id
//         description
//       }
//     }
//   }
// `
const FEED_QUERY = gql`
  query {
    feed {
      id
      description
    }
  }
`

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          console.log(data)

          const linksToRender = data.feed

          return (
            <div>
              {linksToRender.map(link => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList
