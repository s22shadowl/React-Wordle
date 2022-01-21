import React from "react"
import styled from "styled-components"
import { theme_color } from "../style/GlobalStyle"

const KeyBoardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 30vh;
  width: 100%;
`
const KeyBoardRow = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  margin: 3px;
`
const KeyBoardKey = styled.button`
  cursor: pointer;
  height: 100%;
  width: 40px;
  margin: 3px;
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
  width: 60px;
`
const KeyBoard = ({ enterWord, submitGuess, deleteWord }) => {
  const keyboardArray = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ]
  const renderKeyColor = () => {
    // 待處理
  }
  const renderKeyBoardRows = keyboardArray.map((row, rowIndex) => {
    return (
      <KeyBoardRow key={rowIndex}>
        {rowIndex === 2 && (
          <KeyBoardBigKey
            status={"unused"}
            key={"Enter"}
            onClick={() => submitGuess()}
          >
            Enter
          </KeyBoardBigKey>
        )}
        {row.map((key) => {
          return (
            <KeyBoardKey
              status={"unused"}
              key={key}
              value={key}
              onClick={() => {
                enterWord(key)
              }}
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
