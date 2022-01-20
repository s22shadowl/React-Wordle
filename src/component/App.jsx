import React from "react"
import Wordle from "./Wordle"
import GlobalStyle from "../style/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Wordle />
      </div>
    </>
  )
}

export default App
