import React, { useState, useEffect } from 'react';
import '../Galeria/galeria.css'
import { CSSTransition } from 'react-transition-group';
import { Titulo } from '../Titulo';
const images = [
    '../../../../src/assets/img/marcas/americaneagle.png',
    '../../../../src/assets/img/marcas/americanino.png',
    '../../../../src/assets/img/marcas/chevignon.png',
    '../../../../src/assets/img/marcas/esprit.png',
    '../../../../src/assets/img/marcas/nafnaf.png',
    '../../../../src/assets/img/marcas/rifle.png',

];

export const Galeria = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
        }, 7000);
        return () => clearInterval(intervalId);
    }, []);

    return (
    <>
    <Titulo textTitulo={"Nuestras Marcas"} />
     <section className='galeria d-flex flex-column '>
            <CSSTransition in={true} timeout={2000} classNames="fade">
                <img className='carousel-image' src={images[currentIndex]} alt="slide" width={400} />
            </CSSTransition>
            <img className='carousel-image' src="" alt="redes" width={400} />
        </section>
    </>
       

    )
}
