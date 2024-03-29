import { redirect } from "react-router-dom"

const URL = 'https://wedding-rsvp-6d731ff6db69.herokuapp.com/'

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newRsvp = {
        name : formData.get("name"),
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
    

    return redirect(`/confirmation/${formData.get("name")}`)

}