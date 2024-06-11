import {FaHandRock} from "react-icons/fa"

const Rock = (props) => {
    return (
        <button onClick={props.choice} className='hand-icons'><FaHandRock size={props.size}px/></button>
    )
}


export default Rock;