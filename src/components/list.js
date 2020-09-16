import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function List() {
  const data = useStaticQuery(graphql`
    query ReposQuery {
      github {
        user(login: "lu4ezar") {
          pinnedItems(first: 4) {
            nodes {
              ... on GitHub_Repository {
                id
                name
                description
                url
                homepageUrl
                primaryLanguage {
                  color
                  name
                }
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      id
                      name
                    }
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ul>
      {data.github.user.pinnedItems.nodes.map(node => (
        <li key={node.id}>
          <h1>{node.name}</h1>
          <p>{node.description}</p>
        </li>
      ))}
    </ul>
  )
}
