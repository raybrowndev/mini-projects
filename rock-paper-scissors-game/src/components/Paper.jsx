import {FaHandPaper} from "react-icons/fa"

const Paper = (props) => {
    return (
        <button onClick={props.choice} className='hand-icons'><FaHandPaper size={props.size}px/></button>
    )
}

export default Paper;