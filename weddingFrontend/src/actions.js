import { redirect } from "react-router-dom"

const URL = 'https://rsvpbackend.onrender.com/'

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newRsvp = {
        name : formData.get("name"),
        //WILL THIS WORK???? DOES CHECKBOX RETURN A BOOL
        isAttending : formData.get("isAttending") === "on" ? true : false,
        location : formData.get("location"),
        comments :  formData.get("comments")
    }

    await fetch(URL, {
        method: "post",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(newRsvp)
    })
    console.log(newRsvp)
    return redirect("/")
}