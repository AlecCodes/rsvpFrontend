import { Link } from "react-router-dom"

export function NavBar(props){
    return(
        <nav className="navContainer">
            <Link
            className="navLink"
            to = "sandiego"
            >San Diego</Link>

            <Link
            className="navLink"
            to = "seattle"
            >Seattle</Link>


            <Link
            className="navLink"
            to = "newyork"
            >New York</Link>

        </nav>
    )
}
