import React from "react"
import { SoundsProvider, createSounds } from "arwes"

const mySounds = {
  shared: { volume: 1 },
  players: {
    click: {
      sound: { src: ["/sound/click.mp3"] },
    },
    typing: {
      sound: { src: ["/sound/typing.mp3"] },
      settings: { oneAtATime: true },
    },
    deploy: {
      sound: { src: ["/sound/deploy.mp3"] },
      settings: { oneAtATime: true },
    },
  },
}

const sounds = createSounds(mySounds)

const wrapRootElementSound = ({ element }) => {
  return <SoundsProvider sounds={sounds}>{element}</SoundsProvider>
}

export default wrapRootElementSound
