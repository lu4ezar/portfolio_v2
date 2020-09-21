import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Project, Words, Link } from "arwes"

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

  const projects = data.github.user.pinnedItems.nodes.map((node, index) => (
    <Project
      key={node.id}
      animate
      header={node.name}
      style={{ margin: 40, width: "30vw", cursor: "pointer" }}
      onClick={() => console.log("go to project page")}
    >
      {anim => (
        <>
          <p>
            <Words animate show={anim.entered}>
              {node.description}
            </Words>
          </p>
          <p>
            <Link href={node.url}>repo</Link>
          </p>
        </>
      )}
    </Project>
  ))
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        flexGrow: "1",
      }}
    >
      {projects}
    </div>
  )
}
