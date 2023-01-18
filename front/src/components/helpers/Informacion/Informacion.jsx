import React, { useEffect, useState } from 'react'
import { Galeria } from '../Galeria/Carrusel'

export const Informacion = () => {
    const [contentVisible, setcontentVisible] = useState(false);
    useEffect(() => {
        setcontentVisible(true)
    })

    return (
        <section className="informacion">
            <section className={contentVisible ? "content-visible titulos-informacion text-center mb-2 container" : 'content-hidden'}>
                <h1 className='numero-descuento'>40%</h1>
                <h6 className='descuento'>de descuento en TODAS</h6>
                <h3 className=''>nuestras Marcas</h3>
                <Galeria />
            </section>

        </section>
    )
}
