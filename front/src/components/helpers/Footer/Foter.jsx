import React from 'react';
import '../Footer/footer.css'

const FooterInformation = ({ companyName, employeesNumber, foundationYear, companyDescription }) => (
    <>
        <section className="col-md-4 item text">
            <h3>{companyName}</h3>
            <p>{companyDescription}</p>
        </section>
        <section className="col-sm-6 col-md-3 item text">
            <h3>Tamaño de la empresa</h3>
            <p>{employeesNumber}</p>
        </section>
        <section className="col-sm-6 col-md-2 item text">
            <h3>Fundación</h3>
            <p>{foundationYear}</p>
        </section>
    </>

);

const FooterContact = ({ location, address, city, country, phoneNumber, email }) => (
    <section className="col-sm-6 col-md-3 item text">
        <section>
            <h3>Contacto</h3>
            <p>{location}</p>
        </section>
        <section>
            <p>{address}</p>
        </section>
        <section>
            <p>{city}</p>
        </section>
        <section>
            <p>{country}</p>
        </section>
        <section>
            <p>{phoneNumber}</p>
        </section>
        <section>
            <p>
                <a href="#">{email}</a>
            </p>
        </section>
    </section>
);

export const Footer = () => (
    <section className="footer-dark">
        <footer>
            <section className="container mt-4">
                <section className="row d-flex justify-content-center">
                    <FooterInformation
                        companyName="Grupo Uribe"
                        employeesNumber="1001-5000 empleados"
                        foundationYear="1907"
                        companyDescription="Conjunto de empresas ubicada en Medellín del sector textil con representación, y/o producción y comercialización para Colombia de las marcas Chevignon, Naf Naf, Americanino, Esprit, Rifle, American Eagle, MNG."
                    />
                    <FooterContact
                        location="MEDELLIN, ANTIOQUIA"
                        address="Carrera 52 #19-80 avenida guayabal"
                        city="050024 Medellin"
                        country="Colombia"
                        phoneNumber="+57 (604) 6071213"
                        email="mercadeo@johnuribe.com.co"
                    />
                </section>
                <p className="copyright">Grupo Uribe © 2023</p>
                <p className="copyright">Hecho por <a href='https://www.linkedin.com/in/joseasosa24/'>José Sosa</a></p>
            </section>
        </footer>
    </section>
);

export default Footer;