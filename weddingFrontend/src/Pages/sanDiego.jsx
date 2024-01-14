import { useEffect } from "react";
import { Link } from "react-router-dom";

function SanDiego(props){

      
    return(
        <div className="fade-in">  
            <div className='detail'>
                <img id='icon' src="https://cdn-icons-png.flaticon.com/512/535/535239.png"/>
                <p id='location'>Location</p>
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

export default SanDiego