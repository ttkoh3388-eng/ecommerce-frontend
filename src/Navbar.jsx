import { useState } from "react"
import { Link, useLocation } from "wouter";

export default function Navbar() {

    // create a new state variable for the component
    // useState(false) means the default for the state is 'false'
    const [showNavBar, setShowNaveBar] = useState(false);

    // useLocation is a hook from wouter
    // when called, it will return an array of two items
    // index 0 - the current location (aka URL) of the browser
    // index 1 - a function to change the current location of thr browser
    const [location] = useLocation();
    console.log(location)

    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">E-Shop</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => {
                        setShowNaveBar(!showNavBar);
                    }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${showNavBar ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/" ? "active" : ""}`} aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/products" ? "active" : ""}`}  href="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${location === "/register" ? "active": ""}`} href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}