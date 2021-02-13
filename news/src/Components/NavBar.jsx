import React from 'react'
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav>
            <Link to="/"></Link>
            <h1>TEK News</h1>
            <ul>
                 <li><Link to="/Headlines">Headlines</Link></li>
                 <li><Link to="/Sports">Sports</Link></li>
                 <li><Link to="/Weather">Weather</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;