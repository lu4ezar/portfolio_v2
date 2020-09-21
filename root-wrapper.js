import React from "react"
import { ThemeProvider, createTheme, SoundsProvider, createSounds } from "arwes"

const theme = createTheme()
const mySounds = {
  shared: { volume: 1 },
  players: {
    click: {
      sound: { src: ["/sounds/click.mp3"] },
    },
    typing: {
      sound: { src: ["/sounds/typing.mp3"] },
      settings: { oneAtATime: true },
    },
    deploy: {
      sound: { src: ["/sounds/deploy.mp3"] },
      settings: { oneAtATime: true },
    },
  },
}

const sounds = createSounds(mySounds)

const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <SoundsProvider sounds={sounds}>{element}</SoundsProvider>
    </ThemeProvider>
  )
}

export default wrapRootElement
