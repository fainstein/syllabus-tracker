import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./Subject.module.css";

const Subject = (props) => {
  // codigo: "082039",
  ///////// nombre: "Administración Gerencial",
  // cursadasParaCursar: [AdR, InvOp],
  // aprobadasParaCursar: [PyE, SistemasOperativos, DdS, MateSup, Economia],
  // aprobadasParaFinal: [AdR, InvOp],
  // modalidad: "1C",
  // horas: 6,
  // estado: "Pendiente",
  //nota: 0,

  const [estado, setEstado] = useState(props.estado);

  const estadoChangeHandler = (e) => {
    setEstado(e.target.value);
  };

  return (
    <Card
      className={`${styles["subject-container"]} ${styles["materia" + estado]}`}
    >
      <p className={styles["subject-title"]}>{props.nombre}</p>
      <div className={styles["subject-preview"]}>
        <p>{props.modalidad}</p>
        <p>{props.horas} horas</p>
      </div>
      <div className={styles.statusSelection}>
        <div id="radios" className={styles.inputGroup}>
          <label htmlFor="input1"></label>
          <input
            onChange={estadoChangeHandler}
            value={`Pendiente`}
            name="radio"
            type="radio"
            checked={estado === "Pendiente"}
            id="input1"
          ></input>
          <label htmlFor="input2"></label>
          <input
            onChange={estadoChangeHandler}
            value={`Firmada`}
            name="radio"
            type="radio"
            checked={estado === "Firmada"}
            id="input2"
          ></input>
          <label htmlFor="input3"></label>
          <input
            onChange={estadoChangeHandler}
            value={`Final`}
            name="radio"
            type="radio"
            checked={estado === "Final"}
            id="input3"
          ></input>
          <span id="slider"></span>
        </div>
        <p>{estado}</p>
      </div>
    </Card>
  );
};

export default Subject;
