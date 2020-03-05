import React from 'react';
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";

const isActive = (location, path) => {

    if (location.pathname === path) {
        return { color: '#ff9900', border: 'solid' }
    } else {
        return {color: '#fff'}
    }
};

const Navbar = ({ location }) => {
    console.log(location)

    return (
        <nav>
            <ul className="nav bg-dark p-1">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link" style={isActive(location, '/')}>
                        Home
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link to="/about" className="nav-link" style={isActive(location, '/about')}>
                        About
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link to="/admin" className="nav-link" style={isActive(location, '/admin')}>
                        Admin
                    </Link>
                </li>

                <li className="nav-item ml-5">
                    <Link to="/signup" className="nav-link" style={isActive(location, '/signup')}>
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item ml-1 ">
                    <Link to="/signin" className="nav-link" style={isActive(location, '/signin')}>
                        Sign In
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default withRouter(Navbar);