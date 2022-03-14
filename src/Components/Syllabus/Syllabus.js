import React from "react";
import Card from "../UI/Card";
import CareerInfo from "./CarrerInfo";
import CareerLevels from "./CareerLevels";
import styles from "./Syllabus.module.css";

const Syllabus = (props) => {
  return (
    <Card className={styles.container}>
      <CareerInfo
        careerName={props.universidad.nombre}
        university={props.universidad.acronimo}
      ></CareerInfo>
      <CareerLevels levels={props.plan}></CareerLevels>
    </Card>
  );
};

export default Syllabus;
