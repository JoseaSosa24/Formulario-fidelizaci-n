import React from 'react'
import { Field } from "formik";
export const FormSelect = ({datos}) => {
    return (
        <section>
            <Field  name="tipo_identificacion" value={datos.value} as="select">
                <option value="">Seleccione una opción</option>
                
                <option value={datos.value} key={datos.id} >{datos.id}</option>
          
            </Field>
        </section>
    )
}
