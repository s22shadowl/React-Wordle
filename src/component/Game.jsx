import React from "react"
import { render } from "react-dom"
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
  position: relative;
  height: 100%;
  width: 60px;
  margin: 3px;
  background-color: ${theme_color.words_background_unused};
  &::before {
    content: "${(props) => (props.value ? props.value : "")}";
    font-size: 2rem;
    color: ${theme_color.font_main};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Game = ({ currentAnswer, guessHistory }) => {
  const renderRows = guessHistory.map((row) => {
    console.log(row)
    return (
      <AnswerRow>
        <AnswerWord value={row[0][0] ? row[0][0] : ""} key={0} />
        <AnswerWord value={row[0][1] ? row[0][1] : ""} key={1} />
        <AnswerWord value={row[0][2] ? row[0][2] : ""} key={2} />
        <AnswerWord value={row[0][3] ? row[0][3] : ""} key={3} />
        <AnswerWord value={row[0][4] ? row[0][4] : ""} key={4} />
      </AnswerRow>
    )
  })
  return <GameWrap>{renderRows}</GameWrap>
}

export default Game
