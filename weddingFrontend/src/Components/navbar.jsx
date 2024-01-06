import { Link } from "react-router-dom"

export function NavBar(props){
    return(
        <nav>
            <Link
            to = "sandiego"
            >San Diego</Link>

            <Link
            to = "seattle"
            >Seattle</Link>


            <Link
            to = "newyork"
            >New York</Link>

        </nav>
    )
}
