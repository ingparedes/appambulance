export interface Ambulancia {
  id_ambulancias: string;
  cod_ambulancias: string;
  placas: string;
}
export interface Asegurador {
  id_asegurador: string;
  nombre_asegurador: string;
}
export interface CasosAsignados {
  cod_caso: string;
  fecha_incidente: string;
  id_hospital: string;
  nombre_hospital: string;
  cod_ambulancia: string;
  hora_asigna: string;
  id_ambulancias: string;
}
export interface CasosCerrados {
  cod_caso: string;
  fecha_incidente: string;
  id_hospital: string;
  nombre_hospital: string;
  cod_ambulancia: string;
  hora_asigna: string;
  id_ambulancias: string;
}
export interface CasoPDF {
  caso: string;
  fecha: string;
  hospital_id: string;
  hospital_nombre: string;
  ambulancia: string;
  paciente: string;
  paciente_dni: string;
  paciente_dni_tipo: string;
  genero: string;
  fecha_nacimiento: string;
  edad: string;
  edad_tipo: string;
  paciente_telefono: string;
  paciente_celular: string;
  paciente_direccion: string;
  hora_asignacion: string;
  hora_evento: string;
  hora_inicio: string;
  hora_hospital: string;
  causa: string;
  hora_evaluacion: string;
  frecuencia_respiratoria: string;
  presion_arterial: string;
  frecuencia_cardiaca: string;
  saturacion_o2: string;
  temperatura: string;
  glasgow: string;
  a_diabetes: string;
  a_cardiopatia: string;
  a_convul: string;
  a_asma: string;
  a_acv: string;
  a_has: string;
  a_alergia: string;
  a_medicamentos: string;
  a_otros: string;
  diagnosticos: string;
  triage: string;
  observaciones: string;
  descrip_pertenencias: string;
  nombre_p_recibe: string;
  telefono_p_recibe: string;
  medico_recibe: string;
  km_final: string;
  km_inicial: string;
  cierre: string;
}
export interface Checkbox {
  name: string;
}
export interface checkboxarray {
  id: string;
}
export interface CierreCaso {
  id: string;
  nombre: string;
}
export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
  onclick: string;
}
export interface Departamento {
  cod_dpto: string;
  nombre_dpto: string;
}
export interface Diagnostico {
  id: string;
  nombre: string;
}
export interface DiagCaso {
  codigo_cie: string;
  diagnostico: string;
}
export interface Distrito {
  cod_dpto: string;
  cod_provincia: string;
  cod_distrito: string;
  nombre_distrito: string;
}
export interface DNI {
  id_tipo: string;
  descripcion: string;
}
export interface Edad {
  id_edad: string;
  nombre_edad: string;
}
export interface Expf {
  id: string;
  nombre: string;
}
export interface ExpfCaso {
  id: string;
  nombre: string;
  pos: string;
  posx: string;
  posy: string;
}
export interface Expg {
  id: string;
  explo_general_cat: string;
  nombre: string;
}
export interface ExpgCaso {
  id: string;
  id_categoria: string;
  categoria: string;
  nombre: string;
}
export interface Genero {
  nombre_genero: string;
  id_genero: string;
}
export interface Hospital {
  id: string;
  nombre: string;
  dpto: string;
  prov: string;
  dist: string;
}
export interface Insumo {
  id_insumo: string;
  nombre_insumo: string;
}
export interface InsuCaso {
  id_insumo: string;
  nombre_insumo: string;
  cantidad: string;
}
export interface insdiagnostico {
  fecha_horaevaluacion: String;
  triage: String;
  sv_tx: String;
  sv_fc: String;
  sv_fr: String;
  sv_temp: String;
  sv_satO2: String;
  sv_gl: String;
  cod_diag_cie: String;
  ap_diabetes: String;
  ap_cardiop: String;
  ap_convul: String;
  ap_asma: String;
  ap_acv: String;
  ap_has: String;
  ap_alergia: String;
  ap_med_paciente: String;
  ap_otros: String;
}
export interface insexpf {
  id: number;
  posx: number;
  posy: number;
  pos: number;
}
export interface insimagen {
  tipo: string;
  img: string;
}
export interface insinfobasica {
  num_doc: string;
  tipo_doc: string;
  nombre1: string;
  nombre2: string;
  apellido1: string;
  apellido2: string;
  genero: string;
  edad: Number;
  fecha_nacido: string;
  cod_edad: string;
  telefono: string;
  celular: string;
  direccion: string;
  asegurador: string;
  dpto: string;
  prov: string;
  dist: string;
}
export interface insinsumos {
  id: string;
  cant: string;
}
export interface insmedicamento {
  id: string;
  cant: string;
}
export interface insobste {
  trabajoparto: String;
  sangradovaginal: String;
  g: String;
  p: String;
  a: String;
  n: String;
  c: String;
  fuente: String;
  tiempo: String;
}
export interface insotros {
  desc: String;
  nombre_confirma: String;
  telefono_confirma: String;
  kfinal: String;
  hospital: String;
  med: String;
  obscaso: String;
  cierre: String;
}
export interface Medicamento {
  id_medicamento: string;
  nombre_medicamento: string;
}
export interface MediCaso {
  id_medicamento: string;
  nombre_medicamento: string;
  cantidad: string;
}
export interface nosynchs {
  caso: any;
}
export interface ObstCaso {
  trabajoparto: string;
  sangradovaginal: string;
  g: string;
  p: string;
  a: string;
  n: string;
  c: string;
  fuente: string;
  tiempo: string;
}
export interface Procedimiento {
  id: string;
  nombre_procedimeto: string;
}
export interface ProcCaso {
  id: string;
  nombre_procedimeto: string;
}
export interface Provincia {
  cod_departamento: string;
  cod_provincia: string;
  nombre_provincia: string;
}
export interface Trauma {
  id: string;
  causa_trauma_categoria: string;
  nombre: string;
}
export interface TraumaCaso {
  id: string;
  id_cat: string;
  causa_trauma: string;
  nombre: string;
}
export interface TraumasF {
  id: number;
  name: string;
  pos: number;
  posx: number;
  posy: number;
}
export interface Triage {
  id: string;
  nombre: string;
}
export interface turno {
  Token: String;
  cod_ambu: String;
  km_actual: String;
  combustible_actual: String;
  cantidadtiket: String;
  observacion: String;
  usuario: String;
}
export interface Usuario {
  login: string;
  pw: string;
}