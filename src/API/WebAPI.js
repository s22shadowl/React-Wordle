import axios from "axios"
require("dotenv").config()

const isValidWords = (words) => {
  const option = {
    url: `https://wordsapiv1.p.rapidapi.com/words/${words}/definitions`,
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.Rapid_api_key}`,
    },
  }
  axios
    .request(option)
    .then((res) => {
      console.log("apple")
    })
    .catch((err) => {
      console.log("err")
    })
}

export default isValidWords
