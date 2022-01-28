import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Game from "./Game"
import Navbar from "./Navbar"
import { RulePopUpBox, ResultPopUpBox } from "./PopUp"
import { InValidAnswerHint, theme_color } from "../style/GlobalStyle"
import KeyBoard from "./Keyboard"
import { libraryArray, answerLibrary } from "./library"

const WordleBox = styled.div`
  background-color: ${theme_color.background_main};
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
  const [currentMap, setCurrentMap] = useState(defaultMap) // 版面狀態儲存、控制
  const [currentRow, setCurrentRow] = useState(0)
  const [currentCol, setCurrentCol] = useState(0)
  const [currentKeyBoard, setCurrentKeyBoard] = useState(defaultKeyboardStatus)
  const [answer, setAnswer] = useState(null) // 答案、題目碼儲存
  const [answerCode, setAnswerCode] = useState(null)
  const [isSendingAnswer, setIsSendingAnswer] = useState("none") //動畫、彈窗控制
  const [isShowingPopUp, setIsShowingPopUp] = useState("rule")
  const [gameStatus, setGameStatus] = useState("setting")
  const isHandlingKeyDown = useRef(false)
  const wordleRef = useRef() // Focus 用
  useEffect(() => {
    const localStatus = localStorage.getItem("status")
    if (localStatus !== "null" && localStatus) {
      renderLocalStatus(JSON.parse(localStatus))
    }
  }, [])
  useEffect(() => {
    wordleRef.current.focus()
  }, [gameStatus])
  useEffect(() => {
    const localStatus = localStorage.getItem("status")
    if (localStatus !== "null" && localStatus) {
      const localStatus = {
        map: currentMap,
        row: currentRow,
        col: currentCol,
        answerCode: answerCode,
        gameStatus: gameStatus,
      }
      localStorage.setItem("status", JSON.stringify(localStatus))
    }
  }, [currentMap, gameStatus])
  console.log("cheat: The answer is:", answer)
  const createRandomAnswer = () => {
    const answerIndex = Math.floor(Math.random() * 2499)
    setAnswerCode(btoa(btoa(answerIndex)))
    return libraryArray[answerIndex].toUpperCase().split("")
  }
  const getSpecifyAnswer = (code) => {
    const decodeCode = atob(atob(code))
    if (decodeCode > 0 && decodeCode <= 2500) {
      setAnswerCode(code)
      return libraryArray[decodeCode].toUpperCase().split("")
    }
    return
  }
  const renderLocalStatus = (local) => {
    setCurrentMap(local.map)
    setCurrentRow(local.row)
    setCurrentCol(local.col)
    setAnswerCode(local.answerCode)
    setGameStatus(local.gameStatus)
    setAnswer(getSpecifyAnswer(local.answerCode))
    if (local.gameStatus === "over") {
      setIsShowingPopUp("result")
    }
  }
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
        setIsSendingAnswer("valid")
        comparedAnswer(currentMap[0][currentRow])
        setCurrentRow(currentRow + 1)
        setCurrentCol(0)
      } else {
        setIsSendingAnswer("invalid")
      }
      setTimeout(() => {
        setIsSendingAnswer("none")
      }, 1500)
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
    if (correctCount === 5 || currentRow > 5) {
      setIsShowingPopUp("result")
      setGameStatus("over")
    }
    for (let word in arr) {
      // 再次遍歷，處理錯位字母
      if (
        comparedAnswerArray.indexOf(arr[word]) !== -1 &&
        newAnswerRowStatus[word] !== "correct"
      ) {
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
    if (e.key.length === 1 && regex.test(e.key) && gameStatus === "start") {
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
      {isShowingPopUp === "rule" && (
        <RulePopUpBox
          setIsShowingPopUp={setIsShowingPopUp}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          setAnswer={setAnswer}
          setAnswerCode={setAnswerCode}
          answerCode={answerCode}
          createRandomAnswer={createRandomAnswer}
          getSpecifyAnswer={getSpecifyAnswer}
        />
      )}
      {isShowingPopUp === "result" && (
        <ResultPopUpBox
          setIsShowingPopUp={setIsShowingPopUp}
          currentRow={currentRow}
        />
      )}
      <Navbar setIsShowingPopUp={setIsShowingPopUp} />
      {isSendingAnswer === "invalid" && (
        <InValidAnswerHint>題庫中不存在此字</InValidAnswerHint>
      )}
      <Game
        currentMap={currentMap}
        isSendingAnswer={isSendingAnswer}
        currentRow={currentRow}
        currentCol={currentCol}
      />
      <KeyBoard
        deleteWord={deleteWord}
        enterWord={enterWord}
        submitGuess={submitGuess}
        currentKeyBoard={currentKeyBoard}
        gameStatus={gameStatus}
      />
    </WordleBox>
  )
}

export default Wordle
