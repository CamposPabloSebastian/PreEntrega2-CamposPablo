import React from "react";
import "./Navbar.css";
import CardWidget from "../CartWidget/CardWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        // <header>
        //     <div classNameName="empresa">
        //         <div>
        //             <h1>SoloMotos</h1>
        //         </div>
        //         <nav>
        //             <ul classNameName="navbar">
        //                 <Link to="/">Inicio</Link>
        //                 <Link to="/ListMotos">Ver motos</Link>
        //                 <Link to="/">Iniciar Sesion</Link>
        //                 <Link to="/"><CardWidget />1</Link>
        //             </ul>
        //         </nav>
        //     </div>
        // </header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container w-75">
                <Link to="/" className="navbar-brand" href="#"><u><b>Solo</b><i >Motos</i></u></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" id="btbInicio">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ListMotos" type="button" className="nav-link ver-productos" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop" id="publicarVehiculo">
                                Ver motos
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="botonMiCuenta" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Mi cuenta
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="sesion">
                                <li>
                                    <Link type="button" className="dropdown-item" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdropSesion" id="botonEntrar">
                                        Entrar
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#" id="botonRegistrarse"><del>Registarse</del></Link>
                                </li>
                                <li className="ocultar">
                                    <Link type="button" className="dropdown-item" data-bs-target="#staticBackdropPublicar"
                                        data-bs-toggle="modal" id="botonPublicar">
                                        Publicar
                                    </Link>
                                </li>
                                <li className="ocultar">
                                    <Link type="button" className="dropdown-item" id="cerrarSesion">
                                        Cerrar sesion
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <li className="nav-item li-cart" id="cart">
                        <Link to="/cart" className="iconCartWidget">
                            <CardWidget /><span className="spanCartWidget">
                                1
                            </span>
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


