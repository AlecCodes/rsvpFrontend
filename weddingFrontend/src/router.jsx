import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App.jsx"
import LandingPage from "./Pages/landing.jsx"
import { createAction } from "./actions.js"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = "/" element={<App/>}>
            <Route path = "" element={<LandingPage/>} />
            <Route path = "/create" action={createAction}/>
            <Route path = "seattle" element = {<h1>ehee</h1>}/>
            <Route path = "sandiego" element = {<h1>SD!</h1>}/>
            <Route path = "newyork" element = {<h1>newyork</h1>}/>
        </Route>
    )
)

export default router