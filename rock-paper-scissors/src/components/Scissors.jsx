import {FaHandScissors} from "react-icons/fa"

const Scissors = (props) => {
    return (
        <button onClick={props.choice} className='hand-icons hand-scissors'><FaHandScissors size={props.size}px/></button>
    )
}


export default Scissors;