import React from "react";
import styles from "./RadioButtons.module.css";

const RadioButtons = (props) => {
  const estadoChangeHandler = (e) => {
    props.cambiarEstado(e.target.value);
  };

  return (
    <div className={styles.radioGroup}>
      <div>
        <label>
          <input
            name={props.codigo}
            type="radio"
            value="Pendiente"
            onChange={estadoChangeHandler}
            checked={props.estado === "Pendiente"}
          />
          <span> </span>
        </label>
        <label>
          <input
            name={props.codigo}
            type="radio"
            value="Firmada"
            onChange={estadoChangeHandler}
            checked={props.estado === "Firmada"}
          />
          <span> </span>
        </label>
        <label>
          <input
            name={props.codigo}
            type="radio"
            value="Final"
            onChange={estadoChangeHandler}
            checked={props.estado === "Final"}
          />
          <span> </span>
        </label>
      </div>
      <span>{props.estado}</span>
    </div>
  );
};

export default RadioButtons;
