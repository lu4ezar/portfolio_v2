import { Arwes, Content, Header, Words } from "arwes"
import React from "react"
import List from "../components/list"

export default function Home({ data }) {
  return (
    <Arwes
      animate
      pattern="/images/glow.png"
      background="/images/background.jpg"
    >
      <Content style={{ margin: 20 }}>
        <Header>
          <h1>
            <Words animate>Projects</Words>
          </h1>
        </Header>
        <List />
      </Content>
    </Arwes>
  )
}
