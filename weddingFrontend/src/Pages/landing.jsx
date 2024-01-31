import { Form } from "react-router-dom"
import { useState } from "react"

function LandingPage(props){

    const [nameState, setNameState ] = useState("")
    const [isAttendingState, setIsAttendingState] = useState("")
    const [notAttendingState, setNotAttendingState] = useState("")
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
            <div className="fade-in" id="landing">
                <div className="landingPhotoContainer">
                    <img 
                    className="landingPhoto" 
                    src="https://i.imgur.com/tCTIL8n.jpg"/>
                    <div className="darkOverlay"></div>
                    <div className="textOverlay">
                        <p className="overlayText">We're getting married!</p>
                    </div>
                </div>
            </div>
            <div className="landingTextContainer">
                <p
                className="landingText"
                >
                    Join Alec and Lauren for our wedding this summer! Since our friends and family are spread out across the country, we are having three different events in three different locations. Due to venue constraints, we ask that you only attend the location specified in the invitation. See the links above for the details and RSVP below!
                </p>
            </div>            
            <Form
            action = "/create"
            method = "post"
            onSubmit={clearForm}
            >
                <label>Name:</label>
                <input
                type="text"
                placeholder=""
                name="name"
                value={nameState}
                onChange={(e) => setNameState(e.target.value)}
                />
                <label>Can you make it?</label>

                <div className="checkboxContainer">
                    <div>
                        <label>Yes</label><input
                        name="isAttending" 
                        type="checkbox"
                        checked = {isAttendingState}
                        onChange={(e) => {
                            setIsAttendingState(e.target.checked)
                            setNotAttendingState("")
                        }}
                        />
                    </div>
                    <div>
                        <label>No</label>
                        <input
                        type="checkbox"
                        checked = {notAttendingState}
                        onChange={(e) => {
                            setNotAttendingState(e.target.checked)
                            setIsAttendingState("")
                        }}
                        ></input>
                    </div>
                </div>

                <div>
                    <label>Which city were you invited to?</label>
                    <input list="cities"
                    name = "location"
                    checked = {locationState}
                    onChange = {(e) => setLocationState(e.target.checked)}
                    />
                    <datalist id = "cities">
                        <option value = "Seattle"></option>
                        <option value = "San Diego"></option>
                        <option value = "New York"></option>
                    </datalist>
                </div>

                <label>Dietary Restrictions, Questions, etc..?</label>
                <textarea
                type="textarea"
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