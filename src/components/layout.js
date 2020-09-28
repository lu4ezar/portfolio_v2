import React from "react"
import { navigate } from "gatsby"
import { Arwes, Heading, Footer, Link, Words } from "arwes"

const Layout = ({ children }) => (
  <Arwes animate pattern="/images/glow.png" background="/images/background.jpg">
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Heading>
        <div style={{ margin: 20, padding: "0 200px", cursor: "pointer" }}>
          <h2>
            <Words animate onClick={() => navigate("/")}>
              Projects
            </Words>
          </h2>
        </div>
      </Heading>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          flexGrow: "1",
          margin: `3rem auto`,
        }}
      >
        {children}
      </div>
      <Footer>
        <div style={{ display: "flex", margin: 20, padding: "0 200px" }}>
          <div style={{ flexGrow: 1 }}>
            Powered by <Link href="https://github.com/arwes/arwes">Arwes</Link>
          </div>
          <div>
            <Link href="https://github.com/lu4ezar/portfolio_v2">GitHub</Link>
          </div>
        </div>
      </Footer>
    </div>
  </Arwes>
)

export default Layout
