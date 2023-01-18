import React from 'react'
import { FormularioClientes } from '../helpers/Formulario/Clientes/FormularioClientes'
import { Informacion } from '../helpers/Informacion/Informacion'

export const Main = () => {
    return (
        <main className=''>
            <Informacion />
            <FormularioClientes />
        </main>
    )
}
