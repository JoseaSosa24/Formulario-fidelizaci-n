import React from "react";

export const Titulo = ({className, textTitulo, tittle }) => {
  return (
    <section className={tittle}>
      <h2 className={className+" fw-bold"}>{textTitulo}</h2>
    </section>
  );
};
