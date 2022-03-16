import React, { Component } from "react";
import Subject from "./Subject";
import styles from "./Level.module.css";
import M from "materialize-css/dist/js/materialize.min.js";

export default class Level extends Component {
  componentDidMount() {
    M.Collapsible.init(document.querySelectorAll(".collapsible"));
  }
  render() {
    return (
      <div className={styles["level-container"]}>
        <h5 className={styles["level-title"]}>
          Nivel {this.props.nivel.indice}
        </h5>
        <div className={styles["subjects-container"]}>
          <ul className="collapsible active`">
            {this.props.nivel.matObligatorias.map((subject) => (
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
          </ul>
        </div>
        {/* {!props.isLastLevel && <VerticalRule></VerticalRule>} */}
      </div>
    );
  }
}
