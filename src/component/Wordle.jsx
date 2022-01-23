import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Game from "./Game"
import Navbar from "./Navbar"
import { createRandomAnswer, answerLibrary } from "./library"

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
  const defaultMap = [
    Array(6).fill(Array(5).fill("")),
    Array(6).fill(Array(5).fill("TBD")),
  ]
  const defaultKeyboardStatus = {
    A: "unused",
    B: "unused",
    C: "unused",
    D: "unused",
    E: "unused",
    F: "unused",
    G: "unused",
    H: "unused",
    I: "unused",
    J: "unused",
    K: "unused",
    L: "unused",
    M: "unused",
    N: "unused",
    O: "unused",
    P: "unused",
    Q: "unused",
    R: "unused",
    S: "unused",
    T: "unused",
    U: "unused",
    V: "unused",
    W: "unused",
    X: "unused",
    Y: "unused",
    Z: "unused",
  }
  const [currentMap, setCurrentMap] = useState(defaultMap)
  const [currentRow, setCurrentRow] = useState(0)
  const [currentCol, setCurrentCol] = useState(0)
  const [answer, setAnswer] = useState(createRandomAnswer()) // 未完成：檢查答案是否能通過 API
  const isHandlingKeyDown = useRef(false)
  const [currentKeyBoard, setCurrentKeyBoard] = useState(defaultKeyboardStatus)
  const wordleRef = useRef()
  useEffect(() => {
    wordleRef.current.focus()
  }, [])
  console.log("cheat: The answer is:", answer)
  const deleteWord = () => {
    // 確認當前字串長度
    if (currentCol !== 0) {
      setCurrentMap([
        currentMap[0].map((row, rowIndex) => {
          if (currentRow !== rowIndex) return row
          return row.map((col, colIndex) => {
            if (currentCol - 1 !== colIndex) return col
            return ""
          })
        }),

        currentMap[1],
      ])
      setCurrentCol(currentCol - 1)
    }
  }
  const enterWord = (word) => {
    // 確認當前字串長度
    if (currentCol !== 5) {
      setCurrentMap([
        currentMap[0].map((row, rowIndex) => {
          if (currentRow !== rowIndex) return row
          return row.map((col, colIndex) => {
            if (currentCol !== colIndex) return col
            return word
          })
        }),
        currentMap[1],
      ])
      setCurrentCol(currentCol + 1)
    }
  }
  const checkAnswerIsValidWord = (arr) => {
    let inputAnswer = ""
    for (let word of arr) {
      inputAnswer += word.toLowerCase()
    }
    return answerLibrary.indexOf(inputAnswer) !== -1
  }
  const submitGuess = () => {
    // 未處理：驗證動畫、勝負判斷
    if (currentMap[0][currentRow][4] !== "") {
      if (checkAnswerIsValidWord(currentMap[0][currentRow])) {
        comparedAnswer(currentMap[0][currentRow])
        setCurrentRow(currentRow + 1)
        setCurrentCol(0)
      } else {
        console.log("invalid")
      }
    }
  }
  const handleChangeKeyBoard = (newStatus) => {
    const newKeyBoardStatus = currentKeyBoard
    for (let keyStatus of newStatus) {
      // 避免已顯示為正確的字母狀態被修改為錯位
      if (!(newKeyBoardStatus[keyStatus[0]] === "correct")) {
        newKeyBoardStatus[keyStatus[0]] = keyStatus[1]
      }
    }
    setCurrentKeyBoard(newKeyBoardStatus)
  }
  const comparedAnswer = (arr) => {
    const comparedAnswerArray = JSON.parse(JSON.stringify(answer))
    const newAnswerRowStatus = Array(5).fill("wrong")
    const newKeyBoardStatus = []
    let correctCount = 0
    for (let word in arr) {
      // 遍歷輸入答案，優先處理正確字母
      if (comparedAnswerArray.indexOf(arr[word]) !== -1) {
        if (answer[word] === arr[word]) {
          newAnswerRowStatus[word] = "correct"
          comparedAnswerArray.splice(word, 1, "") // 將處理後的字母由檢查陣列中移除，使額外重複輸入的正確字母正確顯示
          correctCount++
        }
      }
    }
    if (correctCount === 5) {
      console.log("WIN")
    }
    for (let word in arr) {
      // 再次遍歷，處理錯位字母
      if (comparedAnswerArray.indexOf(arr[word]) !== -1) {
        newAnswerRowStatus[word] = "near"
        comparedAnswerArray.splice(
          comparedAnswerArray.indexOf(arr[word]),
          1,
          ""
        ) //同樣使額外重複輸入的錯位字母正確顯示
      }
    }
    for (let status in newAnswerRowStatus) {
      // 完成比較後將回答狀態更新至鍵盤與盤面
      newKeyBoardStatus.push([arr[status], newAnswerRowStatus[status]])
    }
    handleChangeKeyBoard(newKeyBoardStatus)
    setCurrentMap([
      currentMap[0],
      currentMap[1].map((row, rowIndex) => {
        if (currentRow !== rowIndex) return row
        return newAnswerRowStatus
      }),
    ])
  }
  const handleKeyDown = (e) => {
    const regex = /[a-z]|[A-Z]/
    if (e.key.length === 1 && regex.test(e.key)) {
      enterWord(e.key.toUpperCase()) // 處理大小寫轉換
    } else if (e.key === "Enter") {
      submitGuess()
    } else if (e.key === "Backspace") {
      deleteWord()
    }
  }
  return (
    <WordleBox
      onKeyDown={(event) => {
        if (!isHandlingKeyDown.current) {
          handleKeyDown(event)
        }
        isHandlingKeyDown.current = true
      }}
      onKeyUp={() => (isHandlingKeyDown.current = false)}
      tabIndex={-1}
      ref={wordleRef}
    >
      <Navbar />
      <Game currentMap={currentMap} />
      <KeyBoard
        deleteWord={deleteWord}
        enterWord={enterWord}
        submitGuess={submitGuess}
        currentKeyBoard={currentKeyBoard}
      />
    </WordleBox>
  )
}

export default Wordle
