import React from "react"
import styled from "styled-components"
import Game from "./Game"
import Navbar from "./Navbar"

import { theme_color } from "../style/GlobalStyle"
import KeyBoard from "./Keyboard"

const WordleBox = styled.div`
  background-color: ${theme_color.background_main};
  width: 500px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

const Wordle = () => {
  return (
    <WordleBox>
      <Navbar />
      <Game />
      <KeyBoard />
    </WordleBox>
  )
}

export default Wordle
