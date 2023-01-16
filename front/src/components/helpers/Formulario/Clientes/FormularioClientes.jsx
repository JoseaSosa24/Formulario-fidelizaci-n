import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from "formik";
import { Titulo } from '../../Titulo';
import { FormInput } from "../../Formulario/FormInput";
import { Button } from '../Button';
import axios from "axios";


export const FormularioClientes = () => {
    const uriIdentificaciones = 'http://localhost:3100/tiposidentificaciones';
    const uriMarcas = 'http://localhost:3100/marcas';
    const uriPaises = 'http://localhost:3100/paises';
    const uriDepartamentos = 'http://localhost:3100/departamentos';
    const uriCiudades = 'http://localhost:3100/ciudades';
    const uriClientes = 'http://localhost:3100/clientes';

    const expresionRegular = {
        usuario: /^[a-zA-Z0-9\_]{4,16}$/, // Letras, numeros, guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        documento: /^\d{9,10}$/,
        celular: /^\d{10}$/
    };

    const [datosIdentificaciones, setDatosIdentificaciones] = useState([]);
    const [datosMarcas, setDatosMarcas] = useState([]);
    const [datosPaises, setDatosPaises] = useState([]);
    const [datosDepartamentos, setDatosDepartamentos] = useState([]);
    const [datosCiudades, setDatosCiudades] = useState([]);
    const [datosClientes, setDatosClientes] = useState([]);

    useEffect(() => {
        getIdentificaciones();
        getMarcas();
        getPaises();
        getDepartamentos();
        getCiudades();
        getClientes();
    }, [])


    const getIdentificaciones = async () => {
        try {
            const res = await axios.get(uriIdentificaciones);
            setDatosIdentificaciones(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getMarcas = async () => {
        try {
            const res = await axios.get(uriMarcas);
            setDatosMarcas(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    const getPaises = async () => {
        try {
            const res = await axios.get(uriPaises);
            setDatosPaises(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    const getDepartamentos = async () => {
        try {
            const res = await axios.get(uriDepartamentos);
            setDatosDepartamentos(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    const getCiudades = async () => {
        try {
            const res = await axios.get(uriCiudades);
            setDatosCiudades(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    const getClientes = async () => {
        try {
            const res = await axios.get(uriClientes);
            setDatosClientes(res.data)
        } catch (error) {
            console.error(error);
        }
    }


    const agregarCliente = async (valores) => {
        console.table(valores)
         /* const { tipoIdentificacion,numero_identificacion, nombres, apellidos, direccion,
            paises, marcas } = valores  */

        const res = await axios.post(uriClientes, {
            "tipo_identificacion_id": valores.tipoIdentificacion,
            "numero_identificacion": valores.numero_identificacion,
            "nombres": valores.nombres,
            "apellidos": valores.apellidos,
            "fecha_nacimiento": valores.fecha_nacimiento,
            "direccion": valores.direccion,
            "pais_id": valores.paises,
            "marca_id": valores.marcas
        });
        if (res.data.estado) {
            console.log("Agregado")
            /* res.data.message */
            /* correcto(); */
            /* console.log("Cliente agregado correctamente") */
        } else {
            console.log(res.data.message)
            /* incorrecto(res.data.message); */
        }
    }

    return (
        <>
            <section className="registro-cliente m-4">
                <Titulo textTitulo={"Registro Cliente:"} />
                <section className="formulario d-flex align-items-center justify-content-center p-4">

                    <Formik
                        initialValues={{
                            tipoIdentificacion: '',
                            numero_identificacion: '',
                            nombres: '',
                            apellidos: '',
                            fecha_nacimiento: '',
                            direccion: '',
                            correo: '',
                            paises: '',
                            departamentos: '',
                            ciudades: '',
                            marcas: ''
                        }}
                        
                        
                        onSubmit={(valores, { resetForm }) => {
                            agregarCliente(valores)
                            /* cambiarFormularioEnviado(true); */
                            //resetForm();
                        }}
                    >
                        {({ errors, touched }) => (
                            <section className="formulario d-flex align-items-center justify-content-center p-4 w-100">
                                <Form className="formulario-clientes row col-12 d-flex g-3 ">
                                    <section>
                                        <h3 className="">Tipo de Identificación</h3>
                                        <Field className="" name="tipoIdentificacion" as="select">
                                            <option value="none">Seleccione una identificación</option>
                                            {
                                                datosIdentificaciones.map((datoIdentificacion) => (
                                                    <option key={datoIdentificacion.id} value={datoIdentificacion.id} id={datoIdentificacion.id}>
                                                        {datoIdentificacion.nombre}
                                                    </option>
                                                ))
                                            }
                                        </Field>
                                    </section>
                                    <FormInput
                                        classSection={"col-3"}
                                        title={"Número de identificación"}
                                        tipoInput={"text"}
                                        inputId={"numero_identificacion"}
                                        inputName="numero_identificacion"
                                        inputPlaceholder={"10364845"}
                                        maxlength="10"
                                    />
                                    
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"Nombres:"}
                                        tipoInput={"text"}
                                        inputId={"nombres"}
                                        inputName="nombres"
                                        inputPlaceholder={"Juan Camilo"}
                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"Apellidos:"}

                                        tipoInput={"text"}
                                        inputId={"apellidos"}
                                        inputName="apellidos"
                                        inputPlaceholder={"Perez Gomez"}
                                    />
                                    <FormInput
                                        classSection={"col-4"}
                                        title={"Fecha de Nacimiento: "}
                                        /*error={errors.apellidos}
                                        touched={touched.apellidos}*/
                                        tipoInput={"date"}
                                        inputId={"fecha_nacimiento"}
                                        inputName="fecha_nacimiento"
                                        inputPlaceholder={"Perez Gomez"}
                                    />
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"Dirección :"}

                                        tipoInput={"text"}
                                        inputId={"direccion"}
                                        inputName="direccion"
                                        inputPlaceholder={"CLL 20 A #10"}
                                    />
                                    <FormInput
                                        classSection={"col-5"}
                                        title={"Correo:"}

                                        tipoInput={"email"}
                                        inputId={"correo"}
                                        inputName="correo"
                                        inputPlaceholder={"juanperez@gmail.com"}
                                    />
                                    <section>
                                        <h3 className="">Pais: </h3>
                                        <Field className="" name="paises" as="select">
                                            <option value="none">Seleccione Pais</option>
                                            {
                                                datosPaises.map((datoPais) => (
                                                    <option key={datoPais.id} value={datoPais.id} id={datoPais.id}>
                                                        {datoPais.nombre}
                                                    </option>
                                                ))
                                            }
                                        </Field>
                                    </section>
                                    <section>
                                        <h3 className="">Departamento: </h3>
                                        <Field className="" name="departamentos" as="select">
                                            <option value="none">Seleccione Departamento</option>
                                            {
                                                datosDepartamentos.map((datoDepartmento) => (
                                                    <option key={datoDepartmento.id} value={datoDepartmento.id} id={datoDepartmento.id}>
                                                        {datoDepartmento.nombre}
                                                    </option>
                                                ))
                                            }
                                        </Field>
                                    </section>
                                    <section>
                                        <h3 className="">Ciudad: </h3>
                                        <Field className="" name="ciudades" as="select">
                                            <option value="none">Seleccione Ciudad</option>
                                            {
                                                datosCiudades.map((datoCiudad) => (
                                                    <option key={datoCiudad.id} value={datoCiudad.id} id={datoCiudad.id}>
                                                        {datoCiudad.nombre}
                                                    </option>
                                                ))
                                            }
                                        </Field>
                                    </section>

                                    <section>
                                        <h3 className="">Marca: </h3>
                                        <Field className="" name="marcas" as="select">
                                            <option value="none">Seleccione Marca</option>
                                            {
                                                datosMarcas.map((datoMarca) => (
                                                    <option key={datoMarca.id} value={datoMarca.id} id={datoMarca.id}>
                                                        {datoMarca.nombre}
                                                    </option>
                                                ))
                                            }
                                        </Field>
                                    </section>

                                    <Button clase={'form-button d-flex justify-content-center col-12'}
                                        classButton={'guardar form-button col-3'}
                                        textButton={'Guardar'} type={'submit'} />
                                </Form>
                            </section>
                        )}
                    </Formik>
                </section>
            </section>
        </>
    )
}
