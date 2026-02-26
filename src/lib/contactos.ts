export interface Contacto {
  cargo: string;
  telefono: string;
  whatsapp?: boolean; // genera link wa.me
}

export interface AreaContacto {
  id: string;
  area: string;
  icon: string; // nombre del icono Lucide
  contactos: Contacto[];
}

export const AREAS_CONTACTO: AreaContacto[] = [
  {
    id: 'comercial',
    area: 'Área Comercial',
    icon: 'TrendingUp',
    contactos: [
      { cargo: 'Presidente Comercial', telefono: '+57 301 959 5999', whatsapp: true },
      { cargo: 'Gerente Comercial', telefono: '+57 314 594 7363', whatsapp: true },
      { cargo: 'Asistente Comercial', telefono: '+57 321 489 1724', whatsapp: true },
    ],
  },
  {
    id: 'comex',
    area: 'Comercio Exterior',
    icon: 'Globe2',
    contactos: [
      { cargo: 'Gerente Comex', telefono: '+57 322 855 2448', whatsapp: true },
    ],
  },
  {
    id: 'nacional',
    area: 'Transporte Nacional',
    icon: 'Truck',
    contactos: [
      { cargo: 'Gerente Nacional', telefono: '+57 300 789 9296', whatsapp: true },
      { cargo: 'Líder Nacional', telefono: '+57 314 809 1693', whatsapp: true },
    ],
  },
  {
    id: 'patio',
    area: 'Patio Contenedores',
    icon: 'Container',
    contactos: [
      { cargo: 'Líder de Patio', telefono: 'Próximamente', whatsapp: false },
    ],
  },
  {
    id: 'almacenamiento',
    area: 'Almacenamiento',
    icon: 'Warehouse',
    contactos: [
      { cargo: 'Gerente', telefono: '+57 312 686 2138', whatsapp: true },
      { cargo: 'Cedis Cartagena', telefono: '+57 323 243 8791', whatsapp: true },
      { cargo: 'Cedis Cali', telefono: '+57 310 547 1251', whatsapp: true },
      { cargo: 'Cedis Funza', telefono: '+57 320 536 6705', whatsapp: true },
      { cargo: 'Cedis Medellín', telefono: '+57 313 542 7070', whatsapp: true },
    ],
  },
  {
    id: 'ultima-milla',
    area: 'Transporte Última Milla',
    icon: 'PackageCheck',
    contactos: [
      { cargo: 'Líder Última Milla', telefono: '+57 320 835 1516', whatsapp: true },
    ],
  },
];
