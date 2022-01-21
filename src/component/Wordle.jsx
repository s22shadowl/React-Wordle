import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Game from "./Game"
import Navbar from "./Navbar"
import isValidWords from "../API/WebAPI"

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
  const [guessHistory, setGuessHistory] = useState([
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ])
  const [currentAnswer, setCurrentAnswer] = useState([])
  const [answer, setAnswer] = useState("")
  const isHandlingKeyDown = useRef(false)
  console.log("render", guessHistory[0])
  const handleKeyDown = (e) => {
    const regex = /[a-z]|[A-Z]/
    if (e.key.length === 1 && regex.test(e.key)) {
      console.log("keydown", isHandlingKeyDown.current)
      enterWord(e.key)
    } else if (e.key === "Enter") {
      submitGuess()
    } else if (e.key === "Backspace") {
      deleteWord()
    }
  }
  document.addEventListener("keydown", (event) => {
    if (!isHandlingKeyDown.current) {
      handleKeyDown(event)
    }
    isHandlingKeyDown.current = true
  })
  document.addEventListener("keyup", (event) => {
    isHandlingKeyDown.current = false
  })

  const deleteWord = () => {
    // 複製當前輸入、刪除最後一個字後重設至當前輸入
    const newAnswer = currentAnswer
    newAnswer.pop()
    setCurrentAnswer(newAnswer)
    setGuessHistory([[newAnswer]])
  }
  const enterWord = (word) => {
    // 確認當前字串長度
    const newAnswer = currentAnswer
    if (currentAnswer.length !== 5) {
      newAnswer.push(word)
      setCurrentAnswer(newAnswer)
      setGuessHistory([[newAnswer]])
    }
  }
  const submitGuess = () => {
    // 未處理
    // isValidWords(currentAnswer)
    // checkAnswer(currentAnswer)
    // setGuessHistory([currentAnswer, ...guessHistory])
  }
  const checkAnswer = (arr) => {
    // 未完成
    for (word in arr) {
      if (answer.indexOf(word) !== -1) {
        if (answer.indexOf(word) === word.index) {
          return "correct"
        } else {
          return "near"
        }
      } else {
        return "wrong"
      }
    }
  }
  return (
    <WordleBox>
      <Navbar />
      <Game currentAnswer={currentAnswer} guessHistory={guessHistory} />
      <KeyBoard
        deleteWord={deleteWord}
        enterWord={enterWord}
        submitGuess={submitGuess}
      />
    </WordleBox>
  )
}

export default Wordle
