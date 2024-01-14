import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Confirmation(props){
    const navigate = useNavigate()
    const names = useParams()
    const [timerState, setTimerState] = useState(5)

    setTimeout(() => {
        (timerState != 0) ? setTimerState(timerState - 1) : navigate('/')
    }, 1000)

    return(
        <div>
            <p>Congratulations {names.name}! RSVP Successfull</p>
            <p>Redirect in {timerState}</p>
        </div>
    )
}

export default Confirmation