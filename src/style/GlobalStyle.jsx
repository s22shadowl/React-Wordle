import styled, { createGlobalStyle, keyframes } from "styled-components"

const theme_color = {
  background_main: "#1C2833",
  background_sub: "#FFFFFF",
  font_main: "#FFFFFF",
  font_sub: "#1C2833",
  words_background_correct: "#27AE60",
  words_background_nearAnswer: "#FFC300",
  words_background_unused: "#ABB2B9",
  words_background_wrongAnswer: "#273746",
}

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "微軟正黑體";
        font-weight: bold;
        -webkit-user-select:none;
        -moz-user-select:none;
        -o-user-select:none;
        user-select:none;
    }
    body {
      margin: 0;
    }
    .container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: ${theme_color.background_main};
    }

    button {
        background-color: inherit;
        border: none;
        box-shadow: none;
    }
`

export default GlobalStyle
export { theme_color }
