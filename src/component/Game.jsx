import React from "react"
import styled from "styled-components"
import { theme_color } from "../style/GlobalStyle"

const GameWrap = styled.div``
const AnswerRow = styled.div`
  display: flex;
  min-width: 300px;
  height: 60px;
  margin: 6px;
`
const AnswerWord = styled.div`
  height: 100%;
  width: 60px;
  margin: 3px;
  background-color: ${theme_color.words_background_unused};
`

const Game = () => {
  return (
    <GameWrap>
      <AnswerRow>
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
      </AnswerRow>
      <AnswerRow>
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
      </AnswerRow>
      <AnswerRow>
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
      </AnswerRow>
      <AnswerRow>
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
      </AnswerRow>
      <AnswerRow>
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
      </AnswerRow>
      <AnswerRow>
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
        <AnswerWord />
      </AnswerRow>
    </GameWrap>
  )
}

export default Game
