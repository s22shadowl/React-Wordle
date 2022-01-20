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
  background-color: ${theme_color.words_background_unused};
  color: ${theme_color.font_main};
`
const KeyBoardBigKey = styled(KeyBoardKey)`
  width: 60px;
`
const KeyBoard = () => {
  return (
    <KeyBoardWrap>
      <KeyBoardRow>
        <KeyBoardKey>Q</KeyBoardKey>
        <KeyBoardKey>W</KeyBoardKey>
        <KeyBoardKey>E</KeyBoardKey>
        <KeyBoardKey>R</KeyBoardKey>
        <KeyBoardKey>T</KeyBoardKey>
        <KeyBoardKey>Y</KeyBoardKey>
        <KeyBoardKey>U</KeyBoardKey>
        <KeyBoardKey>I</KeyBoardKey>
        <KeyBoardKey>O</KeyBoardKey>
        <KeyBoardKey>P</KeyBoardKey>
      </KeyBoardRow>
      <KeyBoardRow>
        <KeyBoardKey>A</KeyBoardKey>
        <KeyBoardKey>S</KeyBoardKey>
        <KeyBoardKey>D</KeyBoardKey>
        <KeyBoardKey>F</KeyBoardKey>
        <KeyBoardKey>G</KeyBoardKey>
        <KeyBoardKey>H</KeyBoardKey>
        <KeyBoardKey>J</KeyBoardKey>
        <KeyBoardKey>K</KeyBoardKey>
        <KeyBoardKey>L</KeyBoardKey>
      </KeyBoardRow>
      <KeyBoardRow>
        <KeyBoardBigKey>Enter</KeyBoardBigKey>
        <KeyBoardKey>Z</KeyBoardKey>
        <KeyBoardKey>X</KeyBoardKey>
        <KeyBoardKey>C</KeyBoardKey>
        <KeyBoardKey>V</KeyBoardKey>
        <KeyBoardKey>B</KeyBoardKey>
        <KeyBoardKey>N</KeyBoardKey>
        <KeyBoardKey>M</KeyBoardKey>
        <KeyBoardBigKey>Back</KeyBoardBigKey>
      </KeyBoardRow>
    </KeyBoardWrap>
  )
}

export default KeyBoard
