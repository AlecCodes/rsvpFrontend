import { Form } from "react-router-dom"
import { useState } from "react"

function LandingPage(props){

    const [nameState, setNameState ] = useState("")
    const [isAttendingState, setIsAttendingState] = useState("")
    const [locationState, setLocationState] = useState("")
    const [commentsState, setCommentsState] = useState("")


    const clearForm = async(e) => {
        setNameState("")
        setIsAttendingState("")
        setLocationState("")
        setCommentsState("")
    }

    return(
        <>
            <div>
                <div className="landingPhotoContainer">
                    <img 
                    className="landingPhoto" 
                    src="https://cdn-bloej.nitrocdn.com/emknaexsdEefsPkHVVUxzMveFcSxOCVq/assets/images/optimized/rev-80a1854/www.weddingrule.com/wp-content/uploads/2021/01/Wedding-Cake-Bakers-San-Diego.jpg"/>
                    <div className="darkOverlay"></div>
                    <div className="textOverlay">
                        <p className="overlayText">We're getting married!</p>
                    </div>
                </div>
            </div>
            <p
            className="landingText"
            >
                Join Alec and Lauren for our wedding this summer! Since our friends and family are spread out across the country, we are having three different events in three different locations. Due to venue constraints, we ask that you only attend the location specitifed in the invitation. See the links above for the details and RSVP below!
            </p>
            
            <Form
            action = "/create"
            method = "post"
            onSubmit={clearForm}
            >
                <input
                type="text"
                placeholder="name"
                name="name"
                value={nameState}
                onChange={(e) => setNameState(e.target.value)}
                />
                <div>
                    <label>Can you make it?</label>
                    <input
                    name="isAttending" 
                    type="checkbox"
                    value = {isAttendingState}
                    onChange={(e) => setIsAttendingState(e.target.value)}
                    />
                </div>

                <div>
                    <label>Which city were you invited to?</label>
                    <input list="cities"
                    name = "location"
                    value = {locationState}
                    onChange = {(e) => setLocationState(e.target.value)}
                    />
                    <datalist id = "cities">
                        <option value = "Seattle"></option>
                        <option value = "San Diego"></option>
                        <option value = "New York"></option>
                    </datalist>
                </div>

                <textarea
                type="textarea"
                placeholder="Dietary Restrictions, Questions, etc.."
                name="comments"
                value = {commentsState}
                onChange={(e) => setCommentsState(e.target.value)}
                />

                <input type="submit"></input>
            </Form>
        </>
    )

}

export default LandingPage