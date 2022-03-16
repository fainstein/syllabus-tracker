import React from "react";
import styles from "./CareerInfo.module.css";
const CareerInfo = (props) => {
  return (
    <div className={styles["info-container"]}>
      <h1 className={styles["career-title"]}>{props.careerName}</h1>
      <p className={styles["university-subtitle"]}>{props.university}</p>
    </div>
  );
};

export default CareerInfo;
