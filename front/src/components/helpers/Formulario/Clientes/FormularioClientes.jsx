import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Titulo } from '../../Titulo';
import { FormInput } from "../../Formulario/FormInput";
import { Button } from '../Button';
import axios from "axios";


export const FormularioClientes = () => {
    const [formVisible, setFormVisible] = useState(false);

    /*  const { id } = useParams(); */

    const uriIdentificaciones = 'http://localhost:3100/tiposidentificaciones';
    const uriMarcas = 'http://localhost:3100/marcas';
    const uriPaises = 'http://localhost:3100/paises';
    const uriDepartamentos = 'http://localhost:3100/departamentos';
    const uriDepartamentosPorPais = 'http://localhost:3100/departamentos/pais'
    const uriCiudades = 'http://localhost:3100/ciudades';
    const uriCiudadesPorDepartamentos = 'http://localhost:3100/ciudades/departamento';
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
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    useEffect(() => {
        setFormVisible(true);
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

    const getDepartamentos = async (paisSeleccionado) => {
        console.log(paisSeleccionado)
        try {
            const res = await axios.get(uriDepartamentosPorPais + "/" + paisSeleccionado);
            setDatosDepartamentos(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    const getCiudades = async (departamentoSeleccionado) => {
        try {
            const res = await axios.get(uriCiudadesPorDepartamentos + "/" + departamentoSeleccionado);
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
        //console.table(valores)
        const res = await axios.post(uriClientes, {
            "tipo_identificacion_id": valores.tipo_identificacion,
            "numero_identificacion": valores.numero_identificacion,
            "nombres": valores.nombres,
            "apellidos": valores.apellidos,
            "fecha_nacimiento": valores.fecha_nacimiento,
            "direccion": valores.direccion,
            "correo": valores.correo,
            "pais_id": valores.paises,
            "departamento_id": valores.departamentos,
            "ciudad_id": valores.ciudades,
            "marca_id": valores.marcas

        });
        if (res.data.estado) {
            console.log("Agregado")
            setFormularioEnviado(true)
            setTimeout(() => {
                setFormularioEnviado(false);
            }, 5000);
        } else {
            console.log(res.data.message)
            /* incorrecto(res.data.message); */
        }
    }


    return (
        <>
            <section className="contenedor-formulario container d-flex flex-column align-items-center justify-content-center">
                <Titulo textTitulo={"Para acceder a este y más beneficios"} className={formVisible ? "content-visible mb-4 fs-4 text-black mt-5" : "content-hidden"} />
                <Titulo textTitulo={"¡Regístrate aquí! "} className={formVisible ? "content-visible mb-4 text-black" : "content-hidden"} />
                <Formik
                    className="formik"
                    enableReinitialize={true}
                    initialValues={{
                        tipo_identificacion: 'none',
                        numero_identificacion: '',
                        nombres: '',
                        apellidos: '',
                        fecha_nacimiento: '',
                        direccion: '',
                        correo: '',
                        paises: 'none',
                        departamentos: 'none',
                        ciudades: 'none',
                        marcas: 'none'
                    }}

                    validate={(valores) => {
                        const fechaActual = new Date();
                        const cumple = new Date(valores.fecha_nacimiento);

                        let errores = {};
                        if (valores.tipo_identificacion === 'none') {
                            errores.tipo_identificacion = 'Tipo de Identificación requerida'
                        }
                        if (!valores.numero_identificacion) {
                            errores.numero_identificacion = 'Identificación requerida'
                        } else if (!expresionRegular.documento.test(valores.numero_identificacion)) {
                            errores.numero_identificacion = 'El documento debe tener mínimo 9 máximo 10 digitos númericos'
                        }

                        if (!valores.nombres) {
                            errores.nombres = 'Nombre requerido'
                        } else if (!expresionRegular.nombre.test(valores.nombres)) {
                            errores.nombres = 'El nombre solo puede contener letras y espacios'
                        }

                        if (!valores.apellidos) {
                            errores.apellidos = 'Apellido requerido'
                        } else if (!expresionRegular.nombre.test(valores.apellidos)) {
                            errores.apellidos = 'El nombre solo puede contener letras y espacios'
                        }

                        if (!valores.correo) {
                            errores.correo = 'Correo requerido'
                        } else if (!expresionRegular.correo.test(valores.correo)) {
                            errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                        }

                        if (!valores.direccion) {
                            errores.direccion = 'Dirección requerida'
                        }

                        if (!valores.fecha_nacimiento) {
                            errores.fecha_nacimiento = 'Por favor selecciona una fecha'
                        } else if (cumple > fechaActual) {
                            errores.fecha_nacimiento = 'La fecha de nacimiento no puede ser mayor a la fecha actual'
                        } else {
                            const edad = fechaActual.getFullYear() - cumple.getFullYear();
                            if (edad < 18) {
                                errores.fecha_nacimiento = "Debe tener al menos 18 años";
                            } else if (edad > 100) {
                                errores.fecha_nacimiento = "No puede tener más de 100 años";
                            }
                        }


                        if (valores.paises === 'none') {
                            errores.paises = 'País requerido'
                        } else {
                            getDepartamentos(valores.paises)
                        }


                        if (valores.departamentos === 'none') {
                            errores.departamentos = 'Departamento requerido'
                        } else {
                            getCiudades(valores.departamentos)
                        }


                        if (valores.ciudades === 'none') {
                            errores.ciudades = 'Ciudad requerida'
                        }
                        if (valores.marcas === 'none') {
                            errores.marcas = 'Marca requerida'
                        }
                        return errores;
                    }}

                    onSubmit={(valores, { resetForm }) => {
                        agregarCliente(valores)
                        resetForm();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className={formVisible ? "content-visible formulario-clientes d-flex align-items-center justify-content-center row col-12 p-2 g-3" : "content-hidden formulario-clientes d-flex align-items-center justify-content-center row col-12 p-2 g-3"}>
                            <section className='col-md-5 campos' >
                                <label className={!(errors.tipo_identificacion && touched.tipo_identificacion) ? "text-black fs-6 fw-bold" : "text-danger fs-6 fw-bold"}
                                >Tipo de Identificación:</label>
                                <Field
                                    className={!(errors.tipo_identificacion && touched.tipo_identificacion) ? "form-styling form-control item-form fw-light" :
                                        "form-styling form-control item-form border border-danger"} name="tipo_identificacion" as="select">
                                    <option className='' value="none">-Tipo Identificación-</option>
                                    {
                                        datosIdentificaciones.map((datoIdentificacion) => (
                                            <option key={datoIdentificacion.id} value={datoIdentificacion.id} id={datoIdentificacion.id}>
                                                {datoIdentificacion.nombre}
                                            </option>
                                        ))
                                    }
                                </Field>
                                <ErrorMessage name="tipo_identificacion" component={() => (<p className="textoError text-danger fw-bold">{errors.tipo_identificacion}</p>)} />
                            </section>
                            <FormInput
                                classSection={"col-md-5 campos"}
                                classInput="form-styling"
                                title={"Número de identificación:"}
                                tipoInput={"text"}
                                error={errors.numero_identificacion}
                                touched={touched.numero_identificacion}
                                inputName="numero_identificacion"
                                inputPlaceholder={"10364845"}
                                maxlength="10"
                            />

                            <FormInput
                                classSection={"col-md-5 campos"}
                                classInput="form-styling"
                                title={"Nombres:"}
                                tipoInput={"text"}
                                error={errors.nombres}
                                touched={touched.nombres}
                                inputId={"nombres"}
                                inputName="nombres"
                                inputPlaceholder={"Juan Camilo"}
                            />
                            <FormInput
                                classSection={"col-md-5 campos"}
                                classInput="form-styling"
                                title={"Apellidos:"}
                                tipoInput={"text"}
                                error={errors.apellidos}
                                touched={touched.apellidos}
                                inputId={"apellidos"}
                                inputName="apellidos"
                                inputPlaceholder={"Perez Gomez"}
                            />
                            <FormInput
                                classSection={"col-md-5 campos"}
                                classInput="form-styling"
                                title={"Fecha de Nacimiento: "}
                                error={errors.fecha_nacimiento}
                                touched={touched.fecha_nacimiento}
                                tipoInput={"date"}
                                inputId={"fecha_nacimiento"}
                                inputName="fecha_nacimiento"
                                inputPlaceholder={"Perez Gomez"}
                            />
                            <FormInput
                                classSection={"col-md-5 campos"}
                                classInput="form-styling"
                                title={"Dirección :"}
                                error={errors.direccion}
                                touched={touched.direccion}
                                tipoInput={"text"}
                                inputId={"direccion"}
                                inputName="direccion"
                                inputPlaceholder={"CLL 20 A #10"}
                            />
                            <FormInput
                                classSection={"col-md-5 campos"}
                                classInput="form-styling"
                                title={"Correo:"}
                                error={errors.correo}
                                touched={touched.correo}
                                tipoInput={"email"}
                                inputId={"correo"}
                                inputName="correo"
                                inputPlaceholder={"juanperez@gmail.com"}
                            />
                            <section className='col-md-5 campos'>
                                <label className={!(errors.paises && touched.paises) ? "text-black fs-6 fw-bold" : "text-danger fs-6 fw-bold"}>País: </label>

                                <Field className={!(errors.paises && touched.paises) ? "form-styling form-control item-form " :
                                    "form-styling form-control item-form border border-danger"}
                                    name="paises"
                                    as="select"
                                >
                                    <option className='' value="none">-Seleccione País-</option>

                                    {
                                        Array.isArray(datosPaises) && datosPaises.length > 0 &&
                                        datosPaises.map((datoPais) => (
                                            <option key={datoPais.id} value={datoPais.id} id={datoPais.id}>
                                                {datoPais.nombre}
                                            </option>
                                        ))
                                    }
                                </Field>
                                <ErrorMessage name="paises" component={() => (<p className="textoError text-danger fw-bold">{errors.paises}</p>)} />

                            </section>
                            <section className='col-md-5 campos'>
                                <label className={!(errors.departamentos && touched.departamentos) ? "text-black fs-6 fw-bold" : "text-danger fs-6 fw-bold"}>Departamento: </label>
                                <Field className={!(errors.departamentos && touched.departamentos) ? "form-styling form-control item-form " :
                                    "form-styling form-control item-form border border-danger "}
                                    name="departamentos"
                                    as="select"
                                >
                                    <option className='' value="none">-Seleccione Departamento-</option>
                                    {
                                        Array.isArray(datosDepartamentos) && datosDepartamentos.length > 0 &&
                                        datosDepartamentos.map((datoDepartamento) => (
                                            <option key={datoDepartamento.id} value={datoDepartamento.id} id={datoDepartamento.id}>
                                                {datoDepartamento.nombre}
                                            </option>
                                        ))

                                    }
                                </Field>

                                <ErrorMessage name="departamentos" component={() => (<p className="textoError text-danger fw-bold">{errors.departamentos}</p>)} />
                            </section>
                            <section className='col-md-5 campos'>
                                <label className={!(errors.ciudades && touched.ciudades) ? "text-black fs-6 fw-bold" : "text-danger fs-6 fw-bold"}>Ciudad: </label>
                                <Field
                                    className={!(errors.ciudades && touched.ciudades) ? "form-styling form-control item-form " :
                                        "form-styling form-control item-form border border-danger"}
                                    name="ciudades"
                                    as="select">
                                    <option className='' value="none">-Seleccione Ciudad-</option>
                                    {
                                        Array.isArray(datosCiudades) && datosCiudades.length > 0 &&
                                        datosCiudades.map((datoCiudad) => (
                                            <option key={datoCiudad.id} value={datoCiudad.id} id={datoCiudad.id}>
                                                {datoCiudad.nombre}
                                            </option>
                                        ))
                                    }
                                </Field>
                                <ErrorMessage name="ciudades" component={() => (<p className="textoError text-danger fw-bold">{errors.ciudades}</p>)} />

                            </section>
                            <section className='col-md-5 campos'>
                                <label className={!(errors.marcas && touched.marcas) ? "text-black fs-6 fw-bold" : "text-danger fs-6 fw-bold"}>Marca: </label>
                                <Field className={!(errors.marcas && touched.marcas) ? "form-styling form-control item-form " :
                                    "form-styling form-control item-form border border-danger"}
                                    name="marcas"
                                    as="select">
                                    <option className='listado-marcas ' value="">-Seleccione Marca-</option>
                                    {
                                        datosMarcas.map((datoMarca) => (
                                            <option className='listado-marcas' key={datoMarca.id} value={datoMarca.id} id={datoMarca.id}>
                                                {datoMarca.nombre}
                                            </option>
                                        ))
                                    }
                                </Field>
                                <ErrorMessage name="marcas" component={() => (<p className="textoError text-danger fw-bold">{errors.marcas}</p>)} />
                            </section>

                            <Button clase={'form-button d-flex justify-content-center col-12 '}
                                classButton={'btn-enviar col-2 mt-4 mb-4'}
                                textButton={'Enviar'} type={'submit'} />
                            {formularioEnviado && (
                                <section className='d-flex justify-content-center mb-4'>
                                    <p className="textExito text-success fw-bold">¡Datos enviados correctamente!</p>
                                </section>
                            )}
                        </Form>
                    )}
                </Formik>
            </section>

        </>
    )
}
