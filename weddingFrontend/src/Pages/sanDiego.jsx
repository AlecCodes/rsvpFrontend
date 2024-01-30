import { useEffect } from "react";
import { Link } from "react-router-dom";

function SanDiego(props){

      
    return(
        <div className="fade-in">  
            <div className='detail'>
                
                <p id='location'>
                    <img id='icon' src="https://cdn-icons-png.flaticon.com/512/535/535239.png"/>    
                     Location: <br id="break"/> <a target="_blank" href="https://www.google.com/maps/place/Harland+Brewing+Co.+-+Bay+Park/@32.7825442,-117.2066805,15z/data=!4m6!3m5!1s0x80deab7acf125071:0xbdd4c39cc1bfeaf9!8m2!3d32.7825442!4d-117.2066805!16s%2Fg%2F11mwx899d8?entry=ttu">Harland Brewing</a>
                </p>
            </div>
            <div className="detail">
                <img id='icon' src="https://static-00.iconduck.com/assets.00/calendar-small-icon-931x1024-onc7jpcy.png"/>
                <p id='date'>June 8th, 2024 3PM</p>
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