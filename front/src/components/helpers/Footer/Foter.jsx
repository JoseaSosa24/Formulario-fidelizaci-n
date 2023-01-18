import React from 'react'
import footer from '../Footer/footer.css'
export const Footer = () => {
    return (
        <div class="footer-dark">
            <footer>
                <div class="container mt-4">

                    <div class="row">
                        <div class="col-md-6 item text">
                            <h3>Grupo Uribe</h3>
                            <p>Conjunto de empresas ubicada en Medellín del sector textil con representación,
                                y/o producción y comercialización para Colombia de las marcas Chevignon,
                                Naf Naf, Americanino, Espit, Rifle, American Eagle, MNG.</p>
                        </div>
                        <div class="col-sm-6 col-md-3 item text d-flex flex-column align-items-center">
                            <h3>Tamaño de la empresa</h3>
                            <p>1001-5000 empleados</p>
                        </div>
                        <div class="col-sm-6 col-md-3 item text d-flex flex-column align-items-center ">
                            <h3>Fundación</h3>
                            <p>1907</p>
                        </div>
                    </div>
                    <p class="copyright">Grupo Uribe © 2023</p>
                </div>
            </footer>
        </div>
    )
}
