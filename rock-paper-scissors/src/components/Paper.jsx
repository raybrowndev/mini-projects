import {FaHandPaper} from "react-icons/fa"

const Paper = (props) => {
    return (
        <button onClick={props.choice} className='hand-icons hand-paper'><FaHandPaper size={props.size}px/></button>
    )
}

export default Paper;