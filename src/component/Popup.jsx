import React, { useState } from "react"
import styled from "styled-components"
import { theme_color } from "../style/GlobalStyle"

const PopUpMask = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`
const RuleWrap = styled.div`
  position: fixed;
  width: 20vw;
  height: 60vh;
  background-color: ${theme_color.background_sub};
  padding: 10px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`
const ResultWrap = styled.div`
  position: fixed;
  width: 200px;
  height: 200px;
  padding: 10px;
  background-color: ${theme_color.background_sub};
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`

const RulePopUpBox = ({ setIsShowingRule }) => {
  return (
    <PopUpMask onClick={() => setIsShowingRule(false)}>
      <RuleWrap>
        Wordle
        的玩法很簡單就是猜單字，能有六次的機會可以把對的單字猜出來，玩法和經典的1A2B
        猜數字益智遊戲很類似。
        當選到正確的字母後，而且它在正確的位置時，空格就會變成綠色；而當字母是有出現在單字內，但順序錯誤的話，空格就會變成黃色；如果字母並沒有出現在單字中的話，就會以灰色顯示。
      </RuleWrap>
    </PopUpMask>
  )
}
const ResultPopUpBox = ({ currentRow, setIsShowingResult }) => {
  return (
    <PopUpMask onClick={() => setIsShowingResult(false)}>
      <ResultWrap>你的猜測次數：{currentRow}</ResultWrap>
    </PopUpMask>
  )
}

export { RulePopUpBox, ResultPopUpBox }
