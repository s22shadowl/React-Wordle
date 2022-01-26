import React, { useState } from "react"
import styled from "styled-components"
import { theme_color } from "../style/GlobalStyle"

const NavbarWrap = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  font-size: 36px;
  color: ${theme_color.font_main};
  border-bottom: ${theme_color.background_sub} 2px solid;
`
const NavButton = styled.div`
  cursor: pointer;
  position: absolute;
  background-color: ${theme_color.background_sub};
  color: ${theme_color.background_main};
  font-size: 18px;
  padding: 4px;
  top: 50%;
  transform: translate(0%, -50%);
`
const HintButton = styled(NavButton)`
  left: 4%;
`
const SettingButton = styled(NavButton)`
  right: 4%;
`

const Navbar = ({ setIsShowingRule }) => {
  return (
    <NavbarWrap>
      <HintButton onClick={() => setIsShowingRule(true)}>提示</HintButton>
      <SettingButton>設定</SettingButton>
      Wordle22
    </NavbarWrap>
  )
}

export default Navbar
