import axios from "axios"

const isValidWords = (words) => {
  const option = {
    url: `https://wordsapiv1.p.rapidapi.com/words/${words}/definitions`,
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "3bf35edbd1mshe6bebb95861ab32p1fc3a0jsn1f84699b1c73",
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
