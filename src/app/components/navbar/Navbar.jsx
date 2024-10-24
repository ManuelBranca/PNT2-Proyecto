import React from "react";
import './navbar.css';
/*
completar mejor el enrutamiento a productos, usuarios y ventas
*/
const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#users">Users</a></li>
                <li><a href="#sales">Sales</a></li>
            </ul>
        </nav>
    );
};