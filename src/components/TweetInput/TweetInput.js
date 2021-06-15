import { useState } from "react"
import "./TweetInput.css"

export default function TweetInput() {

  const [text, setText] = useState('')

  function handleTextChange(e){
    console.log(e.target.value);

    setText(e.target.value)
  }
  function handleTextClick(e){
    e.target.classList = 'expanded'
  }
  function handleTextBlur(e){
    // if(! e.target.value){
    //   e.target.classList
    // }
  }

  return (
    <div className="tweet-container">
      <div className="tweet-box-top row">
        <span className="tweet-avatar fa-stack">
          <i className="fas fa-circle fa-stack-2x">
            <i className="fas fa-user fa-stack-1x"></i>
          </i>
        </span>

        <textarea name="new-tweet" type="text" placeholder="What's Happening?" 
        onChange={handleTextChange} onFocus={handleTextClick} onBlur={handleTextBlur}>
          
        </textarea>

        <i className="fas fa-image"></i>
      </div>
      <div className=" row tweet-extras">
        <div className="icon-set">
          <i className="fas fa-image"></i>
          <i className="icon-gif">GIF</i>
          <i className="far fa-chart-bar"></i>
          <i className="fas fa-map-marker-alt"></i>
        </div>

        <span className={`tweet-length`}>&nbsp;</span>

        <div className="submit">
          <i className="fas fa-plus-circle"></i>
          <button className="submit-button">Tweet</button>
        </div>
      </div>
    </div>
  )
}
