import { useState } from "react"
import "./TweetInput.css"

export default function TweetInput(props) {

  const [text, setText] = useState('')

  const [expanded, setExpanded] = useState('')
  const [isImage, setIsImage] = useState(true)

  function handleTextChange(e){
    // console.log(e.target.value);

    setText(e.target.value)
    
  }
  function handleTextClick(e){

    // e.target.current.classList.add('expanded')
    setExpanded('expanded')
    setIsImage(false)
  }
  function handleTextBlur(e){
    if(! e.target.value){
      // e.target.classList.remove('expanded')
      setExpanded('')
    }
    setIsImage(true)
  }

  function handleOnSubmit(){
    // console.log('profile: ', props.userProfile);

    

    props.addTweet({
      text: text,
      handle: props.userProfile.name
    })
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
        onChange={handleTextChange} onFocus={handleTextClick} onBlur={handleTextBlur} className={expanded}>

        </textarea>


        <i className={`fas ${isImage ? 'fa-image' : 'fa-smile'}`}></i>
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
          <button className="submit-button" onClick={handleOnSubmit}
           >Tweet</button>
        </div>
      </div>
    </div>
  )
}
