import React, { useState } from "react"
import styled from "styled-components"
import { theme_color } from "../style/GlobalStyle"
import { libraryArray } from "./library"

const PopUpMask = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`
const RuleLink = styled.a`
  color: ${theme_color.words_background_correct};
  text-decoration: underline;
`
const AnswerCodeText = styled.p`
  background-color: ${theme_color.words_background_nearAnswer};
  color: ${theme_color.background_main};
  padding: 8px;
  user-select: text;
`
const CorrectText = styled.span`
  color: ${theme_color.words_background_correct};
`
const NearText = styled.span`
  color: ${theme_color.words_background_nearAnswer};
`
const WrongText = styled.span`
  color: ${theme_color.words_background_unused};
`
const RuleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 300px;
  height: 360px;
  background-color: ${theme_color.background_main};
  color: ${theme_color.font_main};
  padding: 10px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`
const PopUpCloseBTN = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background-color: ${theme_color.words_background_nearAnswer};
`
const StartGameBTNs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StartGameBTN = styled.button`
  font-size: 24px;
  background-color: ${theme_color.words_background_nearAnswer};
  margin: 24px 8px;
`
const StartGameInput = styled.input`
  font-size: 24px;
  height: 30px;
  width: 200px;
  background-color: ${theme_color.background_sub};
`
const RuleText = styled.div`
  text-align: left;
`
const ResultText = styled.div``
const ResultWrap = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 300px;
  height: 300px;
  padding: 10px;
  background-color: ${theme_color.background_main};
  color: ${theme_color.font_main};
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`

const RulePopUpBox = ({
  setIsShowingRule,
  isGameStart,
  setIsGameStart,
  setAnswer,
  setAnswerCode,
  answerCode,
}) => {
  const [isUsingSpecifyAnswer, setIsUsingSpecifyAnswer] = useState(false)
  const [answerCodeInputValue, setAnswerCodeInputValue] = useState("")
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
  const StartGameBox = () => {
    if (isGameStart) {
      return <AnswerCodeText>當前題目碼：{answerCode}</AnswerCodeText>
    } else if (isUsingSpecifyAnswer) {
      return (
        <StartGameBTNs>
          <StartGameInput
            value={answerCodeInputValue}
            onChange={(e) => setAnswerCodeInputValue(e.target.value)}
            placeholder="貼上題目碼"
          />
          <StartGameBTN
            onClick={() => {
              setAnswer(getSpecifyAnswer(answerCodeInputValue))
              setIsGameStart(true)
              setIsShowingRule(false)
              setIsUsingSpecifyAnswer(false)
            }}
          >
            送出
          </StartGameBTN>
        </StartGameBTNs>
      )
    } else {
      return (
        <StartGameBTNs>
          <StartGameBTN
            onClick={() => {
              setAnswer(createRandomAnswer())
              setIsShowingRule(false)
              setIsGameStart(true)
            }}
          >
            隨機開始
          </StartGameBTN>
          <StartGameBTN
            onClick={() => {
              setIsUsingSpecifyAnswer(true)
            }}
          >
            輸入題目碼
          </StartGameBTN>
        </StartGameBTNs>
      )
    }
  }
  return (
    <PopUpMask onClick={() => (isGameStart ? setIsShowingRule(false) : null)}>
      <RuleWrap onClick={(e) => e.stopPropagation()}>
        {isGameStart && (
          <PopUpCloseBTN onClick={() => setIsShowingRule(false)}>
            X
          </PopUpCloseBTN>
        )}
        <RuleText>
          <p>
            Wordle22 是仿製{" "}
            <RuleLink
              href="https://www.powerlanguage.co.uk/wordle/"
              target="_blank"
            >
              Wordle
            </RuleLink>{" "}
            的益智遊戲，每次遊戲玩家有六次輸入機會，目的是猜出由五個字母組成的隨機答案單字。
          </p>
          <p>
            當輸入了正確的字母，且字母位置正確時，格子將會變成
            <CorrectText>綠色</CorrectText>。
          </p>
          <p>
            同上，但如果字母位置錯誤時，格子會變成<NearText>黃色</NearText>。
          </p>
          <p>
            如果字母並沒有出現在單字中，則會顯示<WrongText>灰色</WrongText>。
          </p>
        </RuleText>
        <StartGameBox />
      </RuleWrap>
    </PopUpMask>
  )
}
const ResultPopUpBox = ({ currentRow, setIsShowingResult }) => {
  return (
    <PopUpMask onClick={() => setIsShowingResult(false)}>
      <ResultWrap onClick={(e) => e.stopPropagation()}>
        <PopUpCloseBTN onClick={() => setIsShowingResult(false)}>
          X
        </PopUpCloseBTN>
        <ResultText>你的猜測次數：{currentRow}</ResultText>
      </ResultWrap>
    </PopUpMask>
  )
}

export { RulePopUpBox, ResultPopUpBox }
