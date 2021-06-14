import React from "react"

export default function NavBar(){

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a class="navbar-brand" href="#">Coder Shop</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav mr-auto">
                            
                    <li className="nav-item">
                        <a href="pages/Sobremi.html" className="nav-link">About us</a>
                    </li>
                    <li className="nav-item">
                        <a href="pages/galeria.html" className="nav-link">Products</a>
                    </li>         
                    <li className="nav-item">
                        <a href="pages/contacto.html" className="nav-link">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
        
     );
}
