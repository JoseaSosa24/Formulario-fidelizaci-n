import React from 'react'
import '../Footer/footer.css'
export const Footer = () => {
    return (
        <section className="footer-dark">
            <footer>
                <section className="container mt-4">

                    <section className="row d-flex justify-content-center">
                        <section className="col-md-4 item text">
                            <h3>Grupo Uribe</h3>
                            <p>Conjunto de empresas ubicada en Medellín del sector textil con representación,
                                y/o producción y comercialización para Colombia de las marcas Chevignon,
                                Naf Naf, Americanino, Esprit, Rifle, American Eagle, MNG.</p>
                        </section>
                        <section className="col-sm-6 col-md-3 item text">
                            <h3>Tamaño de la empresa</h3>
                            <p>1001-5000 empleados</p>
                        </section>
                        <section className="col-sm-6 col-md-2 item text ">
                            <h3>Fundación</h3>
                            <p>1907</p>
                        </section>
                        <section className="col-sm-6 col-md-3 item text  ">
                            <section>
                                <h3>Contacto</h3>
                                <p>
                                    MEDELLIN, ANTIOQUIA
                                </p>
                            </section>
                            <section>

                                <p>Carrera 52 # 19 - 80 avenida guayabal</p>
                            </section>
                            <section>
                                <p>050024 Medellin</p>
                            </section>
                            <section>
                                <p>Colombia</p>
                            </section>
                            <section>
                                <p>+57 (604) 6071213</p>
                            </section>
                            <section>
                                <p>
                                    <a href="#">mercadeo@johnuribe.com.co</a>
                                </p>
                            </section>
                        </section>

                    </section>
                    <p className="copyright">Grupo Uribe © 2023</p>
                </section>
            </footer >
        </section >
    )
}
