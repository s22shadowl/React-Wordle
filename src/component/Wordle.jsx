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
  const [currentMap, setCurrentMap] = useState([
    [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ],
    [
      ["TBD", "TBD", "TBD", "TBD", "TBD"],
      ["TBD", "TBD", "TBD", "TBD", "TBD"],
      ["TBD", "TBD", "TBD", "TBD", "TBD"],
      ["TBD", "TBD", "TBD", "TBD", "TBD"],
      ["TBD", "TBD", "TBD", "TBD", "TBD"],
      ["TBD", "TBD", "TBD", "TBD", "TBD"],
    ],
  ])
  console.log(currentMap)
  const [count, setCount] = useState(0)
  const [currentRow, setCurrentRow] = useState(0)
  const [currentCol, setCurrentCol] = useState(0)
  const [answer, setAnswer] = useState(["A", "P", "P", "L", "E"])
  const isHandlingKeyDown = useRef(false)
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
  const submitGuess = () => {
    // 未處理
    console.log("submit")
    if (currentMap[0][currentRow].length === 5) {
      checkAnswer(currentMap[0][currentRow])
      setCurrentRow(currentRow + 1)
      setCurrentCol(0)
    }
    // isValidWords(currentAnswer)
  }
  const checkAnswer = (arr) => {
    // 未完成，待補詳細換色功能
    const array = []
    for (let word in arr) {
      if (answer.indexOf(arr[word]) !== -1) {
        if (answer[word] === arr[word]) {
          array.push("correct")
        } else {
          array.push("near")
        }
      } else {
        array.push("wrong")
      }
    }
    setCurrentMap([
      currentMap[0],
      currentMap[1].map((row, rowIndex) => {
        if (currentRow !== rowIndex) return row
        return array
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
    >
      <Navbar />
      <Game currentMap={currentMap} />
      <KeyBoard
        deleteWord={deleteWord}
        enterWord={enterWord}
        submitGuess={submitGuess}
      />
    </WordleBox>
  )
}

export default Wordle
