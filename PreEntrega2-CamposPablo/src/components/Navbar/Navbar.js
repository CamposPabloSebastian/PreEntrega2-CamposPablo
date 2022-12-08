import React from "react";
import "./Navbar.css";
import CardWidget from "../CartWidget/CardWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="empresa">
                <div>
                    <h1>SoloMotos</h1>
                </div>
                <nav>
                    <ul className="navbar">
                        <Link to="/">Inicio</Link>
                        <Link to="/ListMotos">Ver motos</Link>
                        <Link to="/">Iniciar Sesion</Link>
                        <Link to="/"><CardWidget />1</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;


