import React from "react";
import Subject from "./Subject";
// import VerticalRule from "../UI/VerticalRule";
import styles from "./Level.module.css";

const Level = (props) => {
  return (
    <div className={styles["level-container"]}>
      <h2 className={styles["level-title"]}>Nivel {props.nivel.indice}</h2>
      <div className={styles["subjects-container"]}>
        {props.nivel.matObligatorias.map((subject) => (
          // codigo: "082039",
          // nombre: "Administración Gerencial",
          // cursadasParaCursar: [AdR, InvOp],
          // aprobadasParaCursar: [PyE, SistemasOperativos, DdS, MateSup, Economia],
          // aprobadasParaFinal: [AdR, InvOp],
          // modalidad: "1C",
          // horas: 6,
          // estado: "PEndiente"
          // nota: 0,

          <Subject
            key={subject.codigo}
            codigo={subject.codigo}
            nombre={subject.nombre}
            cursadasParaCursar={subject.cursadasParaAprobar}
            aprobadasParaCursar={subject.aprobadasParaCursar}
            aprobadasParaFinal={subject.aprobadasParaFinal}
            modalidad={subject.modalidad}
            horas={subject.horas}
            estado={subject.estado}
          ></Subject>
        ))}
      </div>
      {/* {!props.isLastLevel && <VerticalRule></VerticalRule>} */}
    </div>
  );
};

export default Level;
