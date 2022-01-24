import React from "react"
import styled, { keyframes } from "styled-components"
import { theme_color } from "../style/GlobalStyle"

const shakeAnimation = keyframes`
  from {
  }
  20% {
    transform: translate(5px, 0px);
  }
  40% {
    transform: translate(-5px, 0px);
  }
  60% {
    transform: translate(2.5px, 0px);
  }
  80% {
    transform: translate(-2.5px, 0px);
  }
  to {
    transform: translate(0px, 0px);
  }
`
const popAnimation = keyframes`
 from {  
 }
 25% {
  transform:scale(1.05, 1.05);
 }
 50% {
 }
`
const rotateAnimation = keyframes`
 from {
  background-color: ${theme_color.words_background_unused};
 }
 50% {
  background-color: ${theme_color.words_background_unused};
  transform: rotateX(90deg);
 }
 to {

 }
`
const GameWrap = styled.div``
const AnswerRow = styled.div`
  display: flex;
  min-width: 300px;
  height: 60px;
  margin: 6px;
  animation: ${(props) => {
      return props.isInvalidAnswer ? shakeAnimation : "none"
    }}
    linear 0.25s 2;
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
  animation: ${(props) => {
      return props.animate
    }}
    linear 1s;
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

const Game = ({ currentMap, isSendingAnswer, currentRow, currentCol }) => {
  const renderRows = currentMap[0].map((row, rowIndex) => {
    return (
      <AnswerRow
        key={rowIndex}
        isInvalidAnswer={
          isSendingAnswer === "invalid" && currentRow === rowIndex
        }
      >
        {row.map((col, colIndex) => {
          return (
            <AnswerWord
              value={col}
              key={`${rowIndex}-${colIndex}`}
              status={currentMap[1][rowIndex][colIndex]}
              animate={
                currentRow - 1 === rowIndex
                  ? rotateAnimation
                  : currentCol - 1 === colIndex && currentRow === rowIndex
                  ? popAnimation
                  : "none"
              }
            />
          )
        })}
      </AnswerRow>
    )
  })
  return <GameWrap>{renderRows}</GameWrap>
}

export default Game
