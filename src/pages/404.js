import React from "react"
import { Link } from "gatsby"
import { Content } from "arwes"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout>
    <Content
      style={{
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      <div>There's no such page</div>
      <div>
        Go <Link to="/">home</Link>
      </div>
    </Content>
  </Layout>
)

export default NotFound
