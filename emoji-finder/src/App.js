import React, { useState } from 'react'
import './style.css'

const emojiDictionary = {
  "😊":"smilng face",
  "❤":"heart",
  "😉":"wink",
  "😒":"unamused"
}

const App = () => {

  const [emoji,setEmoji] = useState("")

  function emojiHandler(input){
    const userInput = input.target.value
     
    var emoji = emojiDictionary[userInput]

    if(emoji === undefined){
      emoji = "sorry,we dont have this in our database"
    }
    setEmoji(emoji)   
  }

  return (
    <div className="container-main">
      
        <div className="header">
        <h1>What emoji it is</h1>
        </div>

        <div className="input">
          <input onChange={emojiHandler}/>
        </div>

        <div className="output">
        <h3>{emoji}</h3>
        </div>

        <div className="list">
          <li>😊</li>
          <li>❤</li>
          <li>😉</li>
          <li>😒</li>
        </div>
    </div>
  )
}

export default App
