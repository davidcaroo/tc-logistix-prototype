export interface Politica {
  id: string;
  titulo: string;
  icon: string;           // Lucide icon name
  resumen: string;        // 1 línea para el header cerrado
  contenido: {
    tipo: 'parrafo' | 'lista' | 'destacado';
    texto?: string;
    items?: string[];
  }[];
  etiqueta?: string;      // Badge opcional: "ISO", "RUC", etc.
}

export const POLITICAS: Politica[] = [
  {
    id: 'calidad',
    titulo: 'Política de Calidad',
    icon: 'BadgeCheck',
    resumen: 'Excelencia en cada operación logística a nivel nacional.',
    etiqueta: 'ISO',
    contenido: [
      {
        tipo: 'parrafo',
        texto: `En TRACTOCAR LOGISTIX S.A.S nos comprometemos a ofrecer a nuestros clientes un excelente servicio integral de transporte de carga terrestre local y nacional, almacenamiento y distribución urbana. Un atento a hacer de la asignación de vehículos las óptimas condiciones técnico - mecánicas, suministro de información oportuna del estado del pedido y asegurando siempre opciones de calidad en el transporte.`,
      },
      {
        tipo: 'parrafo',
        texto: `Basamos nuestra gestión en la implementación de un Sistema Integrado de Gestión que mejora continuamente la efectividad de los procesos, con el fin de generar bienestar a accionistas, empleados y contratistas, y el cumplimiento de los requisitos legales aplicables a la actividad del transporte.`,
      },
    ],
  },
  {
    id: 'hse',
    titulo: 'Política HSE',
    icon: 'ShieldCheck',
    resumen: 'Salud, Seguridad y Ambiente como pilares de nuestra operación.',
    etiqueta: 'HSE',
    contenido: [
      {
        tipo: 'parrafo',
        texto: `TRACTOCAR LOGISTIX S.A.S. es una organización dedicada a la prestación de servicios integrales de transporte de carga terrestre local y nacional, el almacenamiento y la distribución urbana. Nuestro compromiso es promover la salud física y mental de nuestros trabajadores, contratistas y todas las partes interesadas.`,
      },
      {
        tipo: 'lista',
        items: [
          'Identificación, evaluación y control de riesgos de Seguridad, Salud, Ambiente y Tecnológicos que prevengan lesiones, enfermedades, daño a la propiedad e impactos socio-ambientales, y la protección de la calidad de vida laboral.',
          'Determinación y asignación de los recursos financieros, humanos, tecnológicos y de infraestructura necesarios.',
          'Cumplimiento de las disposiciones legales vigentes en Colombia y otras que mantiene la organización.',
          'Identificación e implementación de programas de gestión que incluyan contratistas, familiares de trabajadores y otros grupos de interés para mejorar su calidad de vida y una vida saludable.',
          'Mejoramiento de las competencias a través de procesos de formación en SST y SIBA para empleados, contratistas, subcontratistas y otras partes interesadas.',
        ],
      },
    ],
  },
  {
    id: 'no-alcohol',
    titulo: 'Política de No Alcohol',
    icon: 'Wine',
    resumen: 'Cero tolerancia a sustancias psicoactivas en toda la operación.',
    contenido: [
      {
        tipo: 'destacado',
        texto: 'TRACTOCAR LOGISTIX S.A.S. determina que su personal y sus proveedores afiliados, conductores de vehículos, contratistas, subcontratistas y personal en misión, no deben consumir alcohol, drogas y alucinógenos dentro de las instalaciones de la organización.',
      },
      {
        tipo: 'lista',
        items: [
          'Cumplimiento de la normativa legal vigente sobre substancias, libre de humo de tabaco, prevención y consumo de sustancias psicoactivas.',
          'La compañía se reserva el derecho de efectuar la respectiva evaluación a la empresa que sean requeridas.',
          'Únicamente en circunstancias especiales, previa aprobación de la Gerencia y bajo la responsabilidad del contratador, se podrán suministrar determinadas bebidas de grado menor necesarias para que todos los que comparten el lugar de trabajo se mantengan seguros.',
          'Se mantiene al trabajador en programas de prevención: motivación, rehabilitación, participación, de acuerdo al código interno de la compañía.',
        ],
      },
    ],
  },
  {
    id: 'seguridad-vial',
    titulo: 'Política de Seguridad Vial',
    icon: 'Route',
    resumen: 'Protección de la vida vial como compromiso institucional.',
    etiqueta: 'PESV',
    contenido: [
      {
        tipo: 'parrafo',
        texto: `TRACTOCAR LOGISTIX S.A.S. es una empresa dedicada al transporte de carga terrestre. A través de sus directivos se compromete con la protección de la vida vial y el cumplimiento de las normas y estándares de seguridad vial bajo los pilares de seguridad vial de vías, vehículos, tecnología, financiero y humanos.`,
      },
      {
        tipo: 'lista',
        items: [
          'Cumplir con los lineamientos establecidos por la normatividad relacionada con el PESV, enmarcando los principios de la seguridad vial.',
          'Designar al cargo de Síndico o Enlace destinado de las actividades del PESV.',
          'Establecer los lineamientos para la prevención de incidentes antes y desde el inicio de velocidad en la conducción por parte de sus colaboradores.',
          'Establecer los lineamientos para la prevención de incidentes, tanto a causa de la distracción al conducir.',
          'Establecer estrategias y promover la mejora continua del PESV a través de la concienciación del personal propio y contratista, reduciendo capacitaciones.',
          'Velar por el proceso logístico y la responsabilidad del personal propio y contratistas frente a la realización de los mantenimientos preventivos y correctivos de los vehículos.',
          'Diseñar los recursos financieros, humanos y técnicos necesarios para dar cumplimiento a la política, acciones de disposición publica a todas las partes interesadas.',
        ],
      },
    ],
  },
];
