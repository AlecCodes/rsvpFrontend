import { Form } from "react-router-dom"

function LandingPage(props){
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
            >
                <input
                type="text"
                placeholder="name"
                name="name"
                />

                <label>Can you make it?</label>
                <input
                name="isAttending" 
                type="checkbox"/>
                

                <label>Which city were you invited to?</label>
                <input list="cities"
                name = "location"
                />
                <datalist id = "cities">
                    <option value = "Seattle"></option>
                    <option value = "San Diego"></option>
                    <option value = "New York"></option>
                </datalist>

                <textarea
                type="textarea"
                placeholder="Dietary Restrictions, Questions, etc.."
                name="comments"
                />

                <input type="submit"></input>
            </Form>
        </>
    )

}

export default LandingPage