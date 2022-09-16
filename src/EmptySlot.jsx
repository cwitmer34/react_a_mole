import { useEffect } from "react"
import moleHill from './molehill.png'

const EmptySlot = (props) =>{
  useEffect(()=> {
    let randomSecs = Math.ceil(Math.random()*5000)
    let timer = setTimeout(()=>{
      props.toggle(true)
    }, randomSecs)
    return() => clearTimeout(timer)
  })

  return (
    <div className="image-div">
      <img className="image" src={moleHill} onClick={props.handleClick} />
    </div>
  )
}

export default EmptySlot