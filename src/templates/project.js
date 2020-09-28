import React from "react"
import { graphql, navigate } from "gatsby"
import { Words, Content, Project as ArwesProject, Button } from "arwes"
import Layout from "../components/layout"

export const query = graphql`
  query($projectName: String!) {
    github {
      user(login: "lu4ezar") {
        repository(name: $projectName) {
          id
          name
          description
          object(expression: "master:README.md") {
            ... on GitHub_Blob {
              text
            }
          }
        }
      }
    }
  }
`

const Project = ({
  data: {
    github: {
      user: {
        repository: {
          id,
          name,
          description,
          object: { text: readme },
        },
      },
    },
  },
}) => (
  <Layout>
    <div style={{ display: "flex" }}>
      <ArwesProject
        key={id}
        animate
        header={name}
        style={{ margin: 50, maxWidth: 960 }}
      >
        <Content>
          <Words animate>{readme}</Words>
        </Content>
      </ArwesProject>
      <Button
        animate
        onClick={() => navigate("/")}
        style={{ alignSelf: "center" }}
      >
        Back
      </Button>
    </div>
  </Layout>
)

export default Project
