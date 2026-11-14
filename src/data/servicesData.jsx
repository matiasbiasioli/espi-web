import {
  LuLeaf,
  LuBrain,
  LuStethoscope,
  LuUsers,
  LuHeartHandshake,
} from "react-icons/lu";


export const SERVICES_INTRO =
  "En ESPI ofrecemos distintas propuestas de acompañamiento que integran la medicina, la psicoterapia y las prácticas de autocuidado. Cada servicio parte de una mirada integral de la salud, respetando las necesidades, los tiempos y el contexto de cada persona.";

export const SERVICES = [
  {
    id: "tap",
    title: "Terapias asistidas con psicodélicos (TAP)",
    icon: <LuLeaf />,
    description: [
      "Ofrecemos acompañamiento en procesos terapéuticos con microdosis y macrodosis, en modalidades individuales y grupales, según las características y necesidades de cada proceso.",
      "El recorrido comienza con una entrevista individual con un médico de nuestro equipo, para conocer la situación de cada persona, sus objetivos y posibles riesgos o contraindicaciones. A partir de esta evaluación, se orienta sobre las alternativas de acompañamiento más adecuadas.",
      "La preparación, el cuidado clínico y la integración de la experiencia forman parte de nuestro enfoque.",
    ],
  },
  {
    id: "psiquiatria-integrativa",
    title: "Psiquiatría integrativa",
    icon: <LuBrain />,
    description: [
      "Un espacio de atención psiquiátrica que integra la evidencia científica actual con una mirada centrada en la persona, su historia y su contexto.",
      "Abordamos la salud mental considerando los síntomas emocionales y conductuales, así como los hábitos, el descanso, la alimentación y los vínculos. Según las necesidades de cada persona, podemos incorporar distintas herramientas terapéuticas, incluyendo fitomedicina, adaptógenos y prácticas de autoexploración, contemplando sus beneficios, riesgos e interacciones.",
      "Buscamos construir estrategias de cuidado personalizadas que promuevan el bienestar y la autonomía, respetando el proceso de cada persona.",
    ],
  },
  {
    id: "clinica-integrativa",
    title: "Clínica integrativa",
    icon: <LuStethoscope />,
    description: [
      "Un espacio de atención clínica orientado a la salud física, que contempla los síntomas corporales, la prevención y el contexto de vida de cada persona.",
      "Integramos la evaluación médica con una mirada amplia sobre los hábitos y los estilos de vida, considerando aspectos como la alimentación, el movimiento, el descanso y el manejo del estrés.",
      "Buscamos comprender los distintos factores que intervienen en la salud y construir estrategias de cuidado personalizadas, con fundamento científico y una participación activa de cada persona en su proceso.",
    ],
  },
  {
    id: "talleres",
    title: "Talleres y espacios de práctica",
    icon: <LuUsers />,
    description: [
      "Proponemos espacios grupales de aprendizaje y práctica que complementan los procesos de cuidado y bienestar.",
      "A través de experiencias compartidas, buscamos ofrecer herramientas concretas para cultivar la atención, la conciencia corporal y el autocuidado, favoreciendo su incorporación a la vida cotidiana.",
      "Entre nuestras propuestas se encuentran los talleres de meditación y conciencia corporal.",
    ],
  },
  {
    id: "acompanamiento-integracion",
    title: "Acompañamiento e integración de experiencias",
    icon: <LuHeartHandshake />,
    description: [
      "Ofrecemos un espacio de escucha y acompañamiento para personas que han atravesado experiencias significativas, trascendentales o estados no ordinarios de conciencia y necesitan elaborar lo vivido.",
      "El acompañamiento permite explorar los sentidos de la experiencia, reconocer su impacto emocional y encontrar maneras de integrarla a la vida cotidiana.",
      "Está dirigido tanto a personas que han atravesado estas experiencias en contextos terapéuticos como a quienes las han vivido fuera de ellos, sin que hayan formado parte de un proceso terapéutico previo.",
    ],
  },
];