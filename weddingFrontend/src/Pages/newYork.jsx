import { Link } from "react-router-dom"

function NewYork(props){
    return(
        <div className="fade-in">  
            <div className='detail'>
                <p id='location'>
                    <img id='icon' src="https://cdn-icons-png.flaticon.com/512/535/535239.png"/>
                    Location: <br id="break"/><a target="_blank"
                    href="https://www.google.com/maps/@40.9220902,-73.0779562,3a,75y,136.7h,75.04t/data=!3m7!1e1!3m5!1sea1SALjbhuFn4rKAaDpJCA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dea1SALjbhuFn4rKAaDpJCA%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D27.905148%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu">
                    15 Woodchuck ln, East Setauket</a>
                </p>
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

export default NewYork