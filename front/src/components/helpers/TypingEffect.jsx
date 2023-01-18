import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import '../helpers/Galeria/carrusel.css'

const TypingEffect = ({ className, text }) => {
    return (
        <Typewriter
            options={{
                strings: [text],
                autoStart: true,
                loop: true,
            }}
        />
    );
};

export default TypingEffect;

