import React from "react"
import styled from "styled-components"
import { theme_color } from "../style/GlobalStyle"

const KeyBoardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 6px;
`
const KeyBoardRow = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  min-height: 50px;
  margin: 3px;
`
const KeyBoardKey = styled.button`
  cursor: pointer;
  height: 100%;
  flex: 1;
  margin: 3px;
  border-radius: 3px;
  background-color: ${(props) => {
    switch (props.status) {
      case "unused": {
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
  color: ${theme_color.font_main};
`
const KeyBoardBigKey = styled(KeyBoardKey)`
  flex: 2;
`
const KeyBoard = ({
  enterWord,
  submitGuess,
  deleteWord,
  currentKeyBoard,
  gameStatus,
}) => {
  const keyboardArray = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ]
  const renderKeyBoardRows = keyboardArray.map((row, rowIndex) => {
    return (
      <KeyBoardRow key={rowIndex}>
        {rowIndex === 2 && (
          <KeyBoardBigKey
            status={"unused"}
            key={"Enter"}
            onClick={() => {
              submitGuess()
            }}
            disabled={gameStatus === "over"}
          >
            Enter
          </KeyBoardBigKey>
        )}
        {row.map((key) => {
          return (
            <KeyBoardKey
              status={currentKeyBoard[key]}
              key={key}
              value={key}
              onClick={() => {
                enterWord(key)
              }}
              disabled={gameStatus === "over"}
            >
              {key}
            </KeyBoardKey>
          )
        })}
        {rowIndex === 2 && (
          <KeyBoardBigKey
            status={"unused"}
            key={"Back"}
            onClick={() => deleteWord()}
            disabled={gameStatus === "over"}
          >
            Back
          </KeyBoardBigKey>
        )}
      </KeyBoardRow>
    )
  })
  return <KeyBoardWrap>{renderKeyBoardRows}</KeyBoardWrap>
}

export default KeyBoard
