import React, { useState, useEffect } from 'react';
import '../Galeria/carrusel.css'
import { CSSTransition } from 'react-transition-group';


const marcas = [
    {
        img: "../../../../src/assets/img/marcas/americaneagle.png",
        link: "https://www.ae.com.co/",
      
    },
    {
        img: "../../../../src/assets/img/marcas/americanino.png",
        link: "https://www.americanino.com/",
    },
    {
        img: "../../../../src/assets/img/marcas/chevignon.png",
        link: "https://www.chevignon.com.co/"
    },
    {
        img: "../../../../src/assets/img/marcas/esprit.png",
        link: "../../../../src/assets/img/marcas/esprit.png"
    },
    {
        img: "../../../../src/assets/img/marcas/nafnaf.png",
        link: "https://www.esprit.com.co/"
    },
    {
        img: "../../../../src/assets/img/marcas/rifle.png",
        link: "https://www.rifle.com.co/"
    }
];


export const Galeria = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % marcas.length);
       }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className= "galeria d-flex flex-column ">
                <CSSTransition in={true} timeout={2000} classNames="fade">
                    <a href={marcas[currentIndex].link} target="_blank">
                        <img className='carousel-image' src={marcas[currentIndex].img} id={currentIndex} alt="img-marcas" width={270} />
                    </a>
                </CSSTransition>
            </section>
            <h6 className='mensaje'>Click en la imagen para visitar la página oficial*</h6>

        </>


    )
}
