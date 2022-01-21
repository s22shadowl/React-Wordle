import React, { useState } from "react"
import styled from "styled-components"
import { theme_color } from "../style/GlobalStyle"

const NavbarWrap = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 2rem;
  color: ${theme_color.font_main};
  padding: 5px;
  border-bottom: ${theme_color.background_sub} 2px solid;
`
const NavButton = styled.div`
  cursor: pointer;
  position: absolute;
  border-radius: 100%;
  margin: 5px;
  background-color: ${theme_color.background_sub};
  height: 30px;
  width: 30px;
`
const HintButton = styled(NavButton)``
const ResultButton = styled(NavButton)`
  right: 5px;
`
const SettingButton = styled(NavButton)`
  right: 40px;
`

const Navbar = () => {
  return (
    <NavbarWrap>
      <HintButton />
      <ResultButton />
      <SettingButton />
      Wordle22
    </NavbarWrap>
  )
}

export default Navbar
