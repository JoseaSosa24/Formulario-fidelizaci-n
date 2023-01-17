import React from 'react'
import "../Header/Header.css"
export const Header = () => {
    return (
        <header>
            <nav class="navbar bg-body-tertiary ">
                <div class="container-fluid d-flex align-items-center">
                    <a class="navbar-brand text-white d-flex align-items-center" href="#">
                        <img src="../../../../src/assets/img/img-grupourube.jfif" alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
                        <p>Grupo Uribe</p>
                    </a>
                </div>
            </nav>
        </header>
    )
}
