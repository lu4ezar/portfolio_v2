import { Content, Footer, Header, Link, Words } from "arwes"
import React from "react"
import List from "../components/list"

export default function Home({ data }) {
  return (
    <Content
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <div style={{ margin: 20 }}>
        <Header>
          <h1>
            <Words animate>Projects</Words>
          </h1>
        </Header>
      </div>
      <List />
      <Footer style={{ margin: 20, textAlign: "center" }}>
        <Link href="https://github.com/lu4ezar/portfolio_v2">GitHub</Link>
      </Footer>
    </Content>
  )
}
