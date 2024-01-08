export async function createAction({request}) => {
    const formData = await request.formData()
    const newRsvp = {
        name : formData.get("name"),
        //WILL THIS WORK???? DOES CHECKBOX RETURN A BOOL
        isAttending : formData.get("isAttending"),
        location : formData.get("location"),
        comments :  formData.get("comments")
    }

}