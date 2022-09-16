import {useEffect} from 'react'
import moleImg from './mole.png'

const Mole = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className="image-div">
            <img className='image'
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}


export default Mole