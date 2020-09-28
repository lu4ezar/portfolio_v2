import React from "react"
import { ThemeProvider, createTheme, Arwes } from "arwes"

const theme = createTheme()

const wrapRootElementTheme = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <Arwes>{element}</Arwes>
    </ThemeProvider>
  )
}

export default wrapRootElementTheme
