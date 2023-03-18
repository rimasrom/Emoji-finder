import React, { useState } from 'react'
import './style.css'

const emojiDictionary = {
  "😊":"smilng face",
  "❤":"heart",
  "😉":"wink",
  "😒":"unamused"
}

const displayedEmoji = Object.keys(emojiDictionary)

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

  function onclickHandler(input){
    var emoji = emojiDictionary[input]
    setEmoji(emoji)
  }

  return (
    <div className="container-main">
      
        <div className="header">
        <h1>What emoji it is ?</h1>
        </div>

        <div className="input">
          <input onChange={emojiHandler}/>
        </div>

        <div className="output">
        <h2>{emoji}</h2>
        </div>

        <div className="list" >
          {displayedEmoji.map(emoji=>{
            return <li onClick={()=>onclickHandler(emoji)}>{emoji}</li>
          })}
        </div>
    </div>
  )
}

export default App
