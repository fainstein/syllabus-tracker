import React from "react";
import Level from "./Level";
import styles from "./CareerLevels.module.css"

const CareerLevels = (props) => {
    return (
        <div className={styles['levels-container']}>
            {props.levels.niveles.map((nivel, i) => (
                <Level key={nivel.indice} isLastLevel={i+1 === props.levels.niveles.length} nivel={nivel}></Level>
            ))}
        </div>);
}

export default CareerLevels;