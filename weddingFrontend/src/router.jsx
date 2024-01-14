import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App.jsx"
import LandingPage from "./Pages/landing.jsx"
import { createAction } from "./actions.js"
import Seattle from "./Pages/Seattle.jsx"
import NewYork from "./Pages/newYork.jsx"
import SanDiego from "./Pages/sanDiego.jsx"
import Confirmation from "./Pages/Confirmation.jsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = "/" element={<App/>}>
            <Route path = "" element={<LandingPage/>} />
            <Route path ='/confirmation/:name' element={<Confirmation/>} />
            <Route path = "/create" action={createAction}/>
            <Route path = "seattle" element = {<Seattle/>}/>
            <Route path = "sandiego" element = {<SanDiego/>}/>
            <Route path = "newyork" element = {<NewYork/>}/>
        </Route>
    )
)

export default router