import React from "react"
import { navigate, graphql, useStaticQuery } from "gatsby"
import { Project, Words, Link } from "arwes"

export default function List() {
  const {
    github: {
      user: {
        pinnedItems: { nodes: projects },
      },
    },
  } = useStaticQuery(graphql`
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

  return projects.map(({ id, name, description, url }, index) => (
    <Project
      key={id}
      animate
      header={name}
      style={{ margin: 50, width: "30vw", cursor: "pointer" }}
      onClick={() => navigate(`/projects/${name}`)}
    >
      {anim => (
        <>
          <p>
            <Words animate show={anim.entered}>
              {description}
            </Words>
          </p>
          <p>
            <Link href={url}>repo</Link>
          </p>
        </>
      )}
    </Project>
  ))
}
