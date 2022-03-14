import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/SyllabusDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const materiaSchema = mongoose.Schema({
  codigo: String,
  nombre: String,
  cursadasParaCursar: [this],
  aprobadasParaCursar: [this],
  aprobadasParaFinal: [this],
  modalidad: String,
  horas: Number,
  firmada: Boolean,
  aprobada: Boolean,
  nota: Number,
});

const nivelSchema = mongoose.Schema({
  matObligatorias: [materiaSchema],
  matElectivas: [materiaSchema],
  indice: Number,
});

const carreraSchema = mongoose.Schema({
  cantNiveles: Number,
  niveles: [nivelSchema],
  titulo: String,
  anioDelPlan: Number,
});

const universidadSchema = mongoose.Schema({
  nombre: String,
  acronimo: String,
  carreras: [carreraSchema],
});

const Materia = mongoose.model("Materia", materiaSchema);
const Nivel = mongoose.model("Nivel", nivelSchema);
const Carrera = mongoose.model("Carrera", carreraSchema);
const Universidad = mongoose.model("Universidad", universidadSchema);

const SyO = new Materia({
    codigo: "082023",
    nombre: "Sistemas y Organizaciones",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "A",
    horas: 3,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const AM1 = new Materia({
    codigo: "950702",
    nombre: "Análisis Matemático 1",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "A",
    horas: 5,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const MaDi = new Materia({
    codigo: "082020",
    nombre: "Matemática Discreta",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "A",
    horas: 3,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const AyED = new Materia({
    codigo: "082021",
    nombre: "Algoritmos y Estructuras de Datos",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "A",
    horas: 5,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const AdC = new Materia({
    codigo: "082022",
    nombre: "Arquitectura de Computadoras",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "A",
    horas: 4,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const AGA = new Materia({
    codigo: "050701",
    nombre: "Álgebra y Geometría Analítica",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "A",
    horas: 5,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const Quimica = new Materia({
    codigo: "081420",
    nombre: "Química",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "1C",
    horas: 3,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const IngySoc = new Materia({
    codigo: "951604",
    nombre: "Sistemas y Organizaciones",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "2C",
    horas: 4,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const primerAnio = new Nivel({
    matObligatorias: [SyO, AM1, MaDi, AyED, AdC, AGA, Quimica, IngySoc],
    matElectivas: [],
    indice: 1,
  });
  
  const AdS = new Materia({
    codigo: "082024",
    nombre: "Análisis de Sistemas",
    cursadasParaCursar: [SyO, AyED],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [SyO, AyED],
    modalidad: "A",
    horas: 6,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const SdR = new Materia({
    codigo: "951601",
    nombre: "Sistemas de Representación",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "A",
    horas: 3,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const AM2 = new Materia({
    codigo: "950703",
    nombre: "Análisis Matemático 2",
    cursadasParaCursar: [AM1, AGA],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [AM1, AGA],
    modalidad: "A",
    horas: 5,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const SSL = new Materia({
    codigo: "082025",
    nombre: "Sintaxis y Semántica de los Lenguajes",
    cursadasParaCursar: [MaDi, AyED],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [MaDi, AyED],
    modalidad: "A",
    horas: 4,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const Fisica1 = new Materia({
    codigo: "950605",
    nombre: "Física 1",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "A",
    horas: 5,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const PdP = new Materia({
    codigo: "082026",
    nombre: "Paradigmas de Programación",
    cursadasParaCursar: [MaDi, AyED],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [MaDi, AyED],
    modalidad: "A",
    horas: 4,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const Ingles1 = new Materia({
    codigo: "951602",
    nombre: "Inglés 1",
    cursadasParaCursar: [],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [],
    modalidad: "1C",
    horas: 4,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const PyE = new Materia({
    codigo: "950704",
    nombre: "Probabilidad y Estadística",
    cursadasParaCursar: [AM1, AGA],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [AM1, AGA],
    modalidad: "2C",
    horas: 6,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const segundoAnio = new Nivel({
    matObligatorias: [AdS, SdR, AM2, SSL, Fisica1, PdP, Ingles1, PyE],
    matElectivas: [],
    indice: 2,
  });
  
  const DdS = new Materia({
    codigo: "082028",
    nombre: "Diseño de Sistemas",
    cursadasParaCursar: [AdS, PdP],
    aprobadasParaCursar: [MaDi, AyED, SyO],
    aprobadasParaFinal: [AdS, PdP],
    modalidad: "A",
    horas: 6,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const SistemasOperativos = new Materia({
    codigo: "082027",
    nombre: "Sistemas Operativos",
    cursadasParaCursar: [MaDi, AyED, AdC],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [MaDi, AyED, AdC],
    modalidad: "1C",
    horas: 8,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const Fisica2 = new Materia({
    codigo: "950606",
    nombre: "Física 2",
    cursadasParaCursar: [AM1, Fisica1],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [AM1, Fisica1],
    modalidad: "1C",
    horas: 10,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const Economia = new Materia({
    codigo: "950309",
    nombre: "Economía",
    cursadasParaCursar: [AdS],
    aprobadasParaCursar: [],
    aprobadasParaFinal: [AdS],
    modalidad: "1C",
    horas: 6,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const GdD = new Materia({
    codigo: "082030",
    nombre: "Gestión de Datos",
    cursadasParaCursar: [AdS, PdP, SSL],
    aprobadasParaCursar: [MaDi, AyED, SyO],
    aprobadasParaFinal: [AdS, PdP, SSL],
    modalidad: "2C",
    horas: 8,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const Ingles2 = new Materia({
    codigo: "951603",
    nombre: "Inglés 2",
    cursadasParaCursar: [],
    aprobadasParaCursar: [Ingles1],
    aprobadasParaFinal: [Ingles1],
    modalidad: "2C",
    horas: 4,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const MateSup = new Materia({
    codigo: "082032",
    nombre: "Matemática Superior",
    cursadasParaCursar: [AM2],
    aprobadasParaCursar: [AM1, AGA],
    aprobadasParaFinal: [AM2],
    modalidad: "2C",
    horas: 8,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const Legislacion = new Materia({
    codigo: "950310",
    nombre: "Legislación",
    cursadasParaCursar: [AdS, SyO],
    aprobadasParaCursar: [SyO, AyED],
    aprobadasParaFinal: [AdS, SyO],
    modalidad: "2C",
    horas: 4,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const tercerAnio = new Nivel({
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
  
  const AdR = new Materia({
    codigo: "082033",
    nombre: "Administración de Recursos",
    cursadasParaCursar: [DdS, SistemasOperativos, Economia],
    aprobadasParaCursar: [AdC, Ingles1, AdS, PdP],
    aprobadasParaFinal: [DdS, SistemasOperativos, Economia],
    modalidad: "A",
    horas: 6,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const IngSoftware = new Materia({
    codigo: "082038",
    nombre: "Ingeniería de Software",
    cursadasParaCursar: [PyE, DdS, GdD],
    aprobadasParaCursar: [AdS, SSL, PdP],
    aprobadasParaFinal: [PyE, DdS, GdD],
    modalidad: "1C",
    horas: 6,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const TdC = new Materia({
    codigo: "082036",
    nombre: "Teoría de Control",
    cursadasParaCursar: [Quimica, MateSup],
    aprobadasParaCursar: [AM2, Fisica2],
    aprobadasParaFinal: [Quimica, MateSup],
    modalidad: "1C",
    horas: 6,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const Comunicaciones = new Materia({
    codigo: "082029",
    nombre: "Comunicaciones",
    cursadasParaCursar: [AdC, AM2, Fisica2],
    aprobadasParaCursar: [AM1, AGA, Fisica1],
    aprobadasParaFinal: [AdC, AM2, Fisica2],
    modalidad: "1C",
    horas: 8,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const RedesDeInformacion = new Materia({
    codigo: "082031",
    nombre: "Redes de Información",
    cursadasParaCursar: [SistemasOperativos, Comunicaciones],
    aprobadasParaCursar: [MaDi, AyED, AdC, AM2, Fisica2],
    aprobadasParaFinal: [SistemasOperativos, Comunicaciones],
    modalidad: "2C",
    horas: 8,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const InvOp = new Materia({
    codigo: "082034",
    nombre: "Investigación Operativa",
    cursadasParaCursar: [PyE, MateSup],
    aprobadasParaCursar: [AM2],
    aprobadasParaFinal: [PyE, MateSup],
    modalidad: "2C",
    horas: 10,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const Simulacion = new Materia({
    codigo: "082041",
    nombre: "Simulación",
    cursadasParaCursar: [PyE, MateSup],
    aprobadasParaCursar: [AM2],
    aprobadasParaFinal: [PyE, MateSup],
    modalidad: "2C",
    horas: 8,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const cuartoAnio = new Nivel({
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
  
  const IntArt = new Materia({
    codigo: "082040",
    nombre: "Inteligencia Artifical",
    cursadasParaCursar: [InvOp, Simulacion],
    aprobadasParaCursar: [PyE, DdS, MateSup],
    aprobadasParaFinal: [InvOp, Simulacion],
    modalidad: "1C",
    horas: 6,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const AdmGerencial = new Materia({
    codigo: "082039",
    nombre: "Administración Gerencial",
    cursadasParaCursar: [AdR, InvOp],
    aprobadasParaCursar: [PyE, SistemasOperativos, DdS, MateSup, Economia],
    aprobadasParaFinal: [AdR, InvOp],
    modalidad: "1C",
    horas: 6,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const SistDeGestion = new Materia({
    codigo: "082035",
    nombre: "Sistemas de Gestión",
    cursadasParaCursar: [AdR, InvOp, Simulacion],
    aprobadasParaCursar: [PyE, SistemasOperativos, DdS, MateSup, Economia],
    aprobadasParaFinal: [AdR, InvOp, Simulacion],
    modalidad: "1C",
    horas: 8,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const ProyFinal = new Materia({
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
    modalidad: "A",
    horas: 6,
    firmada: false,
    aprobada: false,
    nota: 0,
  });
  
  const quintoAnio = new Nivel({
    matObligatorias: [ProyFinal, IntArt, AdmGerencial, SistDeGestion],
    matElectivas: [],
    indice: 5
  });
  
  const IngEnSistemasDeInformacion = new Carrera({
    niveles: [primerAnio, segundoAnio, tercerAnio, cuartoAnio, quintoAnio],
    titulo: "Ingeniería en Sistemas de Información",
    anioDelPlan: 2008,
  });
  
  const UTNFRBA = new Universidad({
    nombre: "Universidad Tecnológica Nacional - Facultad Regional Buenos Aires",
    acronimo: "UTN FRBA",
    carreras: [IngEnSistemasDeInformacion],
  });