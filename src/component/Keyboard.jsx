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
const KeyBoard = ({ enterWord, submitGuess, deleteWord }) => {
  return (
    <KeyBoardWrap>
      <KeyBoardRow>
        <KeyBoardKey
          data-value={"q"}
          onClick={() => {
            enterWord("q")
            console.log("click")
          }}
        >
          Q
        </KeyBoardKey>
        <KeyBoardKey data-value={"w"}>W</KeyBoardKey>
        <KeyBoardKey data-value={"e"}>E</KeyBoardKey>
        <KeyBoardKey data-value={"r"}>R</KeyBoardKey>
        <KeyBoardKey data-value={"t"}>T</KeyBoardKey>
        <KeyBoardKey data-value={"y"}>Y</KeyBoardKey>
        <KeyBoardKey data-value={"u"}>U</KeyBoardKey>
        <KeyBoardKey data-value={"i"}>I</KeyBoardKey>
        <KeyBoardKey data-value={"o"}>O</KeyBoardKey>
        <KeyBoardKey data-value={"p"}>P</KeyBoardKey>
      </KeyBoardRow>
      <KeyBoardRow>
        <KeyBoardKey data-value={"a"}>A</KeyBoardKey>
        <KeyBoardKey data-value={"s"}>S</KeyBoardKey>
        <KeyBoardKey data-value={"d"}>D</KeyBoardKey>
        <KeyBoardKey data-value={"f"}>F</KeyBoardKey>
        <KeyBoardKey data-value={"g"}>G</KeyBoardKey>
        <KeyBoardKey data-value={"h"}>H</KeyBoardKey>
        <KeyBoardKey data-value={"j"}>J</KeyBoardKey>
        <KeyBoardKey data-value={"k"}>K</KeyBoardKey>
        <KeyBoardKey data-value={"l"}>L</KeyBoardKey>
      </KeyBoardRow>
      <KeyBoardRow>
        <KeyBoardBigKey onClick={() => submitGuess()}>Enter</KeyBoardBigKey>
        <KeyBoardKey data-value={"z"}>Z</KeyBoardKey>
        <KeyBoardKey data-value={"x"}>X</KeyBoardKey>
        <KeyBoardKey data-value={"c"}>C</KeyBoardKey>
        <KeyBoardKey data-value={"v"}>V</KeyBoardKey>
        <KeyBoardKey data-value={"b"}>B</KeyBoardKey>
        <KeyBoardKey data-value={"n"}>N</KeyBoardKey>
        <KeyBoardKey data-value={"m"}>M</KeyBoardKey>
        <KeyBoardBigKey onClick={() => deleteWord()}>Back</KeyBoardBigKey>
      </KeyBoardRow>
    </KeyBoardWrap>
  )
}

export default KeyBoard
