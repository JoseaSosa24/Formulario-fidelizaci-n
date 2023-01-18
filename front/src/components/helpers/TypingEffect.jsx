import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import '../helpers/Galeria/galeria.css'

const TypingEffect = ({ className, text }) => {
    return (
        <>
            {text.map((t, index) => (
                <Typewriter
                    key={index}
                    className={`text-${index}`}
                    options={{
                        cursor: "",
                        
                        strings: [t],
                        autoStart: true,
                        loop: true,
                    }}
                />
            ))}
        </>
    );
};

export default TypingEffect;

