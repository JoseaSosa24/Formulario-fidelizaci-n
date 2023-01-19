import React, { useState, useEffect } from 'react';
import '../Galeria/carrusel.css'
import { CSSTransition } from 'react-transition-group';

const images = [
    '../../../../src/assets/img/marcas/americaneagle.png',
    '../../../../src/assets/img/marcas/americanino.png',
    '../../../../src/assets/img/marcas/chevignon.png',
    '../../../../src/assets/img/marcas/esprit.png',
    '../../../../src/assets/img/marcas/nafnaf.png',
    '../../../../src/assets/img/marcas/rifle.png',

];

const linksMarcas = [
    'https://www.ae.com.co/',
    'https://www.americanino.com/',
    'https://www.chevignon.com.co/',
    ' https://www.esprit.com.co/',
    'https://www.nafnaf.com.co/',
    'https://www.rifle.com.co/'
]

export const Galeria = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexLinks, setCurrentIndexLinks] = useState(0);
    const [contentVisible, setcontentVisible] = useState(false);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
            setCurrentIndexLinks(currentIndexLinks => (currentIndexLinks + 1) % linksMarcas.length)
        }, 5000);
        setcontentVisible(true)
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className= "galeria d-flex flex-column ">
                <CSSTransition in={true} timeout={2000} classNames="fade">
                    <a href={linksMarcas[currentIndexLinks]} target="_blank">
                        <img className='carousel-image' src={images[currentIndex]} id={currentIndex} alt="slide" width={270} />
                    </a>
                </CSSTransition>
            </section>
            <h6 className='mensaje'>Click en la imagen para visitar la página oficial*</h6>

        </>


    )
}
