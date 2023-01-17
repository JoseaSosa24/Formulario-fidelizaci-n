import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormInput = ({classSection, infomacionInput, inputId, error, touched, classInput, tipoInput, inputName,
  inputPlaceholder, expresionRegular, title,
  maxlength }) => {


  return (
    <>

      <section className={" " + classSection}>
        <label className={!(error && touched) ? "text-white fs-5 fw-bold" : "text-danger fs-5 fw-bold"}>{title}</label>
        <Field
          className={!(error && touched) ? classInput + " form-control item-form " : classInput +" form-control item-form border border-danger border-2 rounded-5"}
          type={tipoInput}
          id={inputId}
          name={inputName}
          placeholder={inputPlaceholder}
          maxLength={maxlength}
        />
        <ErrorMessage name={inputName} component={() => (<p className="textoError text-danger fw-bold">{error}</p>)} />
      </section>
    </>
  );
};