import { useState } from "react";
import EmptySlot from "./EmptySlot";
import Mole from "./Mole";

const MoleContainer = (props) => {
  let [displayMole, setDisplayMole] = useState(false)

  const handleClick = () => {
    props.setScore(props.score + 1)
    setDisplayMole(false)
  }

  let isDisplayed = displayMole ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleClick={handleClick}/> : <EmptySlot toggle={setDisplayMole}/>

  return (
    <div className="container">
      {isDisplayed}
    </div>
  )
}

export default MoleContainer