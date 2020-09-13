import React from "react"
import { ThemeProvider, createTheme, Arwes } from "arwes"

const theme = createTheme()

const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Arwes>{element}</Arwes>
    </ThemeProvider>
  )
}

export default wrapRootElement
