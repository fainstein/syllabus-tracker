import React, { useState } from "react";
// import Card from "../UI/Card";
import styles from "./Subject.module.css";
import RadioButtons from "../UI/RadioButtons";

const Subject = (props) => {
  // codigo: "082039",
  ///////// nombre: "Administración Gerencial",
  // cursadasParaCursar: [AdR, InvOp],
  // aprobadasParaCursar: [PyE, SistemasOperativos`, DdS, MateSup, Economia],
  // aprobadasParaFinal: [AdR, InvOp],
  // modalidad: "1C",
  // horas: 6,
  // estado: "Pendiente",
  //nota: 0,

  const [estado, setEstado] = useState(props.estado);

  const setEstadoHandler = (nuevoEstado) => {
    setEstado(nuevoEstado);
  };

  return (
    <li id={props.codigo}>
      <div className={`collapsible-header ${styles["subject-header"]} ${styles["materia"+estado]}`}>
        <p>{props.nombre}</p>
      </div>
      <div className={`collapsible-body ${styles["collapsible-body"]}`}>
        <div className={styles["subject-body"]}>
          <div className={styles["subject-mainData"]}>
            <div className={styles["subject-subMainData"]}>
              <span className="material-icons">calendar_month</span>
              <p>{props.modalidad}</p>
            </div>
            <div className={styles["subject-subMainData"]}>
              <span className="material-icons">schedule</span>
              <p> {props.horas} Horas</p>
            </div>
          </div>
          <RadioButtons
            codigo={props.codigo}
            estado={estado}
            cambiarEstado={setEstadoHandler}
          ></RadioButtons>
        </div>
      </div>
    </li>
  );
};

export default Subject;
