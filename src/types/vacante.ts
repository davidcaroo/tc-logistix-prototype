export interface Vacante {
  id: string;
  titulo: string;
  ciudad: string;
  tipo: 'FULL-TIME' | 'PART-TIME' | 'CONTRATO';
  area: string;
  fechaPublicacion: string;
  descripcion: string;
  requisitos: string[];
  responsabilidades: string[];
  ofrecemos: string[];
  salario?: string;
  contactoEmail: string;
}

export interface PostulacionForm {
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  mensaje?: string;
  cv: File;
}
