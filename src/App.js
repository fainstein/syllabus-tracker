import React from "react";
import Syllabus from "./Components/Syllabus/Syllabus";
import styles from "./App.module.css";


const SyO = ({
  codigo: "082023",
  nombre: "Sistemas y Organizaciones",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
  modalidad: "Anual",
  horas: 3,
  estado: "Pendiente",
  nota: 0,
});

const AM1 = ({
  codigo: "950702",
  nombre: "Análisis Matemático 1",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
  modalidad: "Anual",
  horas: 5,
  estado: "Pendiente",
  nota: 0,
});

const MaDi = ({
  codigo: "082020",
  nombre: "Matemática Discreta",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
  modalidad: "Anual",
  horas: 3,
  estado: "Pendiente",
  nota: 0,
});

const AyED =  ({
  codigo: "082021",
  nombre: "Algoritmos y Estructuras de Datos",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
  modalidad: "Anual",
  horas: 5,
  estado: "Pendiente",
  nota: 0,
});

const AdC =  ({
  codigo: "082022",
  nombre: "Arquitectura de Computadoras",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
  modalidad: "Anual",
  horas: 4,
  estado: "Pendiente",
  nota: 0,
});

const AGA =  ({
  codigo: "050701",
  nombre: "Álgebra y Geometría Analítica",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
  modalidad: "Anual",
  horas: 5,
  estado: "Pendiente",
  nota: 0,
});

const Quimica =  ({
  codigo: "081420",
  nombre: "Química",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
   modalidad: "1er Cuatrimestre",
  horas: 3,
  estado: "Pendiente",
  nota: 0,
});

const IngySoc =  ({
  codigo: "951604",
  nombre: "Sistemas y Organizaciones",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
  modalidad: "2do Cuatrimestre",
  horas: 4,
  estado: "Pendiente",
  nota: 0,
});

const primerAnio =  ({
  matObligatorias: [SyO, AM1, MaDi, AyED, AdC, AGA, Quimica, IngySoc],
  matElectivas: [],
  indice: 1,
});

const AdS =  ({
  codigo: "082024",
  nombre: "Análisis de Sistemas",
  cursadasParaCursar: [SyO, AyED],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [SyO, AyED],
  modalidad: "Anual",
  horas: 6,
  estado: "Pendiente",
  nota: 0,
});

const SdR =  ({
  codigo: "951601",
  nombre: "Sistemas de Representación",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
  modalidad: "Anual",
  horas: 3,
  estado: "Pendiente",
  nota: 0,
});

const AM2 =  ({
  codigo: "950703",
  nombre: "Análisis Matemático 2",
  cursadasParaCursar: [AM1, AGA],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [AM1, AGA],
  modalidad: "Anual",
  horas: 5,
  estado: "Pendiente",
  nota: 0,
});

const SSL =  ({
  codigo: "082025",
  nombre: "Sintaxis y Semántica de los Lenguajes",
  cursadasParaCursar: [MaDi, AyED],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [MaDi, AyED],
  modalidad: "Anual",
  horas: 4,
  estado: "Pendiente",
  nota: 0,
});

const Fisica1 =  ({
  codigo: "950605",
  nombre: "Física 1",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
  modalidad: "Anual",
  horas: 5,
  estado: "Pendiente",
  nota: 0,
});

const PdP =  ({
  codigo: "082026",
  nombre: "Paradigmas de Programación",
  cursadasParaCursar: [MaDi, AyED],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [MaDi, AyED],
  modalidad: "Anual",
  horas: 4,
  estado: "Pendiente",
  nota: 0,
});

const Ingles1 =  ({
  codigo: "951602",
  nombre: "Inglés 1",
  cursadasParaCursar: [],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [],
   modalidad: "1er Cuatrimestre",
  horas: 4,
  estado: "Pendiente",
  nota: 0,
});

const PyE =  ({
  codigo: "950704",
  nombre: "Probabilidad y Estadística",
  cursadasParaCursar: [AM1, AGA],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [AM1, AGA],
  modalidad: "2do Cuatrimestre",
  horas: 6,
  estado: "Pendiente",
  nota: 0,
});

const segundoAnio =  ({
  matObligatorias: [AdS, SdR, AM2, SSL, Fisica1, PdP, Ingles1, PyE],
  matElectivas: [],
  indice: 2,
});

const DdS =  ({
  codigo: "082028",
  nombre: "Diseño de Sistemas",
  cursadasParaCursar: [AdS, PdP],
  aprobadasParaCursar: [MaDi, AyED, SyO],
  aprobadasParaFinal: [AdS, PdP],
  modalidad: "Anual",
  horas: 6,
  estado: "Pendiente",
  nota: 0,
});

const SistemasOperativos =  ({
  codigo: "082027",
  nombre: "Sistemas Operativos",
  cursadasParaCursar: [MaDi, AyED, AdC],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [MaDi, AyED, AdC],
   modalidad: "1er Cuatrimestre",
  horas: 8,
  estado: "Pendiente",
  nota: 0,
});

const Fisica2 =  ({
  codigo: "950606",
  nombre: "Física 2",
  cursadasParaCursar: [AM1, Fisica1],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [AM1, Fisica1],
   modalidad: "1er Cuatrimestre",
  horas: 10,
  estado: "Pendiente",
  nota: 0,
});

const Economia =  ({
  codigo: "950309",
  nombre: "Economía",
  cursadasParaCursar: [AdS],
  aprobadasParaCursar: [],
  aprobadasParaFinal: [AdS],
   modalidad: "1er Cuatrimestre",
  horas: 6,
  estado: "Pendiente",
  nota: 0,
});

const GdD =  ({
  codigo: "082030",
  nombre: "Gestión de Datos",
  cursadasParaCursar: [AdS, PdP, SSL],
  aprobadasParaCursar: [MaDi, AyED, SyO],
  aprobadasParaFinal: [AdS, PdP, SSL],
  modalidad: "2do Cuatrimestre",
  horas: 8,
  estado: "Pendiente",
  nota: 0,
});

const Ingles2 =  ({
  codigo: "951603",
  nombre: "Inglés 2",
  cursadasParaCursar: [],
  aprobadasParaCursar: [Ingles1],
  aprobadasParaFinal: [Ingles1],
  modalidad: "2do Cuatrimestre",
  horas: 4,
  estado: "Pendiente",
  nota: 0,
});

const MateSup =  ({
  codigo: "082032",
  nombre: "Matemática Superior",
  cursadasParaCursar: [AM2],
  aprobadasParaCursar: [AM1, AGA],
  aprobadasParaFinal: [AM2],
  modalidad: "2do Cuatrimestre",
  horas: 8,
  estado: "Pendiente",
  nota: 0,
});

const Legislacion =  ({
  codigo: "950310",
  nombre: "Legislación",
  cursadasParaCursar: [AdS, SyO],
  aprobadasParaCursar: [SyO, AyED],
  aprobadasParaFinal: [AdS, SyO],
  modalidad: "2do Cuatrimestre",
  horas: 4,
  estado: "Pendiente",
  nota: 0,
});

const tercerAnio =  ({
  matObligatorias: [
    DdS,
    SistemasOperativos,
    Fisica2,
    Economia,
    GdD,
    Ingles2,
    MateSup,
    Legislacion,
  ],
  matElectivas: [],
  indice: 3,
});

const AdR =  ({
  codigo: "082033",
  nombre: "Administración de Recursos",
  cursadasParaCursar: [DdS, SistemasOperativos, Economia],
  aprobadasParaCursar: [AdC, Ingles1, AdS, PdP],
  aprobadasParaFinal: [DdS, SistemasOperativos, Economia],
  modalidad: "Anual",
  horas: 6,
  estado: "Pendiente",
  nota: 0,
});

const IngSoftware =  ({
  codigo: "082038",
  nombre: "Ingeniería de Software",
  cursadasParaCursar: [PyE, DdS, GdD],
  aprobadasParaCursar: [AdS, SSL, PdP],
  aprobadasParaFinal: [PyE, DdS, GdD],
   modalidad: "1er Cuatrimestre",
  horas: 6,
  estado: "Pendiente",
  nota: 0,
});

const TdC =  ({
  codigo: "082036",
  nombre: "Teoría de Control",
  cursadasParaCursar: [Quimica, MateSup],
  aprobadasParaCursar: [AM2, Fisica2],
  aprobadasParaFinal: [Quimica, MateSup],
   modalidad: "1er Cuatrimestre",
  horas: 6,
  estado: "Pendiente",
  nota: 0,
});

const Comunicaciones =  ({
  codigo: "082029",
  nombre: "Comunicaciones",
  cursadasParaCursar: [AdC, AM2, Fisica2],
  aprobadasParaCursar: [AM1, AGA, Fisica1],
  aprobadasParaFinal: [AdC, AM2, Fisica2],
   modalidad: "1er Cuatrimestre",
  horas: 8,
  estado: "Pendiente",
  nota: 0,
});

const RedesDeInformacion =  ({
  codigo: "082031",
  nombre: "Redes de Información",
  cursadasParaCursar: [SistemasOperativos, Comunicaciones],
  aprobadasParaCursar: [MaDi, AyED, AdC, AM2, Fisica2],
  aprobadasParaFinal: [SistemasOperativos, Comunicaciones],
  modalidad: "2do Cuatrimestre",
  horas: 8,
  estado: "Pendiente",
  nota: 0,
});

const InvOp =  ({
  codigo: "082034",
  nombre: "Investigación Operativa",
  cursadasParaCursar: [PyE, MateSup],
  aprobadasParaCursar: [AM2],
  aprobadasParaFinal: [PyE, MateSup],
  modalidad: "2do Cuatrimestre",
  horas: 10,
  estado: "Pendiente",
  nota: 0,
});

const Simulacion =  ({
  codigo: "082041",
  nombre: "Simulación",
  cursadasParaCursar: [PyE, MateSup],
  aprobadasParaCursar: [AM2],
  aprobadasParaFinal: [PyE, MateSup],
  modalidad: "2do Cuatrimestre",
  horas: 8,
  estado: "Pendiente",
  nota: 0,
});

const cuartoAnio =  ({
  matObligatorias: [
    AdR,
    IngSoftware,
    TdC,
    Comunicaciones,
    RedesDeInformacion,
    InvOp,
    Simulacion,
  ],
  matElectivas: [],
  indice: 4
});

const IntArt =  ({
  codigo: "082040",
  nombre: "Inteligencia Artifical",
  cursadasParaCursar: [InvOp, Simulacion],
  aprobadasParaCursar: [PyE, DdS, MateSup],
  aprobadasParaFinal: [InvOp, Simulacion],
   modalidad: "1er Cuatrimestre",
  horas: 6,
  estado: "Pendiente",
  nota: 0,
});

const AdmGerencial =  ({
  codigo: "082039",
  nombre: "Administración Gerencial",
  cursadasParaCursar: [AdR, InvOp],
  aprobadasParaCursar: [PyE, SistemasOperativos, DdS, MateSup, Economia],
  aprobadasParaFinal: [AdR, InvOp],
   modalidad: "1er Cuatrimestre",
  horas: 6,
  estado: "Pendiente",
  nota: 0,
});

const SistDeGestion =  ({
  codigo: "082035",
  nombre: "Sistemas de Gestión",
  cursadasParaCursar: [AdR, InvOp, Simulacion],
  aprobadasParaCursar: [PyE, SistemasOperativos, DdS, MateSup, Economia],
  aprobadasParaFinal: [AdR, InvOp, Simulacion],
   modalidad: "1er Cuatrimestre",
  horas: 8,
  estado: "Pendiente",
  nota: 0,
});

const ProyFinal =  ({
  codigo: "082037",
  nombre: "Proyecto Final",
  cursadasParaCursar: [Legislacion, AdR, RedesDeInformacion, IngSoftware],
  aprobadasParaCursar: [
    IngySoc,
    SdR,
    PyE,
    SistemasOperativos,
    DdS,
    GdD,
    Economia,
    Ingles2,
    Comunicaciones,
  ],
  aprobadasParaFinal: [IntArt, AdmGerencial, SistDeGestion].concat(
    primerAnio,
    segundoAnio,
    tercerAnio,
    cuartoAnio
  ),
  modalidad: "Anual",
  horas: 6,
  estado: "Pendiente",
  nota: 0,
});

const quintoAnio =  ({
  matObligatorias: [ProyFinal, IntArt, AdmGerencial, SistDeGestion],
  matElectivas: [],
  indice: 5
});

const IngEnSistemasDeInformacion = ({
  niveles: [primerAnio, segundoAnio, tercerAnio, cuartoAnio, quintoAnio],
  titulo: "Ingeniería en Sistemas de Información",
  anioDelPlan: 2008,
});

const UTNFRBA = ({
  nombre: "Universidad Tecnológica Nacional",
  acronimo: "UTN FRBA",
  carreras: [IngEnSistemasDeInformacion],
});

function App() {
  return (
    <div className={styles["syllabus-container"]}>
      <Syllabus
        universidad={UTNFRBA}
        plan={IngEnSistemasDeInformacion}
      ></Syllabus>
    </div>
  );
}

export default App;
