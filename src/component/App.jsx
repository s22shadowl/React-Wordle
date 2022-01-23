import React from "react"
import Wordle from "./Wordle"
import GlobalStyle from "../style/GlobalStyle"

function App() {
  return (
    <>
      <div className="container">
        <GlobalStyle />
        <Wordle />
      </div>
    </>
  )
}

export default App
