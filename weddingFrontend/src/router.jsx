import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App.jsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = "/" element={<App/>}>
            <Route path = "" element={<h3>WELCOeeeM</h3>}/>
            <Route path = "seattle" element = {<h1>ehee</h1>}/>
        </Route>
    )
)

export default router