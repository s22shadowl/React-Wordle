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
  position: relative;
  height: 100%;
  width: 60px;
  margin: 3px;
  border-radius: 3px;
  background-color: ${(props) => {
    switch (props.status) {
      case "TBD": {
        return theme_color.words_background_unused
      }
      case "correct": {
        return theme_color.words_background_correct
      }
      case "near": {
        return theme_color.words_background_nearAnswer
      }
      case "wrong": {
        return theme_color.words_background_wrongAnswer
      }
    }
  }};
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

const Game = ({ currentMap }) => {
  const renderRows = currentMap[0].map((row, rowIndex) => {
    return (
      <AnswerRow key={rowIndex}>
        {row.map((col, colIndex) => {
          return (
            <AnswerWord
              value={col}
              key={`${rowIndex}-${colIndex}`}
              status={currentMap[1][rowIndex][colIndex]}
            />
          )
        })}
      </AnswerRow>
    )
  })
  return <GameWrap>{renderRows}</GameWrap>
}

export default Game
