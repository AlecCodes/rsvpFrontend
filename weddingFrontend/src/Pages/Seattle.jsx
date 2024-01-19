import { Link } from "react-router-dom"

function Seattle(props){
    return(
        <div className="fade-in">  
            <div className='detail'>
                <img id='icon' src="https://cdn-icons-png.flaticon.com/512/535/535239.png"/>
                <p id='location'>Location: <a
                href="https://www.google.com/maps/place/5634+12th+Ave+NE,+Seattle,+WA+98105/@47.6704574,-122.3197544,17z/data=!3m1!4b1!4m6!3m5!1s0x5490146446aa1547:0xcdc819fa33b6ed3f!8m2!3d47.6704575!4d-122.3148835!16s%2Fg%2F11c1dp9rfy?entry=ttu"
                target="_blank"
                >5634 12th Ave NE</a></p>
            </div>
            <div className="detail">
                <img id='icon' src="https://static-00.iconduck.com/assets.00/calendar-small-icon-931x1024-onc7jpcy.png"/>
                <p id='date'>July 8th, 2024</p>
            </div>
            <hr/>
            <img 
            src="https://images.vexels.com/media/users/3/132032/isolated/lists/7a2a531a5e0c67179de908d388702c63-save-the-date-typography-2.png" alt="SD image"></img>
            <hr/>
            <Link to = "/">Back</Link>
        </div>
    )
}

export default Seattle