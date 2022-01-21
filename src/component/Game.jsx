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
        <AnswerWord
          value={row[0] ? row[0] : ""}
          key={`${rowIndex}-0`}
          status={currentMap[1][rowIndex][0]}
        />
        <AnswerWord
          value={row[1] ? row[1] : ""}
          key={`${rowIndex}-1`}
          status={currentMap[1][rowIndex][1]}
        />
        <AnswerWord
          value={row[2] ? row[2] : ""}
          key={`${rowIndex}-2`}
          status={currentMap[1][rowIndex][2]}
        />
        <AnswerWord
          value={row[3] ? row[3] : ""}
          key={`${rowIndex}-3`}
          status={currentMap[1][rowIndex][3]}
        />
        <AnswerWord
          value={row[4] ? row[4] : ""}
          key={`${rowIndex}-4`}
          status={currentMap[1][rowIndex][4]}
        />
      </AnswerRow>
    )
  })
  return <GameWrap>{renderRows}</GameWrap>
}

export default Game
