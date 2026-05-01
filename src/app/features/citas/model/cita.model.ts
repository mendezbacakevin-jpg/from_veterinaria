// Este modelo representa lo que recibes del backend
export interface Cita {
  idCita: number;          // 👈 agregado: identificador de la cita
  nombreMascota: string;   // 👈 agregado: nombre de la mascota
  fecha: string;           // 👈 agregado: fecha de la cita
  hora: string;            // 👈 agregado: hora de la cita
  motivo: string;          // 👈 agregado: motivo de la cita
  id_servicio: number;     // 👈 agregado: referencia al servicio
  id_veterinario: number;  // 👈 agregado: referencia al veterinario
  id_animal: number;       // 👈 agregado: referencia al animal
  nombreVeterinario: string;
  nombreServicio: string;
  estado: string;
}



// Este modelo representa lo que envías al backend al crear/guardar una cita
export interface CitaRequest {
  idAnimal: number;       // 👈 agregado
  idServicio: number;     // 👈 agregado
  idVeterinario: number;  // 👈 agregado
  fecha: string;          // 👈 agregado
  hora: string;           // 👈 agregado
  motivo: string;         // 👈 agregado
}
