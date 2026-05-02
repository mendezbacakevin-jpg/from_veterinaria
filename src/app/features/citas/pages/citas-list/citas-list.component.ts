import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cita, CitaRequest } from '../../model/cita.model';
import { CitaService } from '../../../../core/services/cita.service';
import { FormsModule } from '@angular/forms';
import { Servicio } from '../../model/servicio.model';
import { Veterinario } from '../../model/veterinario.model'; // 👈 agregado
import { Animal } from '../../model/animal.model'; // 👈 agregado

@Component({
  selector: 'app-citas-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './citas-list.component.html'
})
export class CitasListComponent implements OnInit {
 citas: Cita[] = [];
 editingId: number = 0;
 servicios: Servicio[] = [];
  veterinarios: Veterinario[] = []; // 👈 agregado
  animales: Animal[] = []; // 👈 agregado
 nuevaCita: CitaRequest = {
  motivo: '', fecha: '', idServicio: 0,  idVeterinario: 0,hora: '',idAnimal: 0 // 👈 agregado
 };

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
    this.cargarCitas();
       // 👇 agregado: cargar servicios
    this.citaService.getServicios().subscribe({
      next: (data) => {this.servicios = data; },
      error: (err) => console.error('Error cargando servicios', err)
    });
     // 👇 agregado: cargar veterinarios
    this.citaService.getVeterinarios().subscribe({
      next: (data) => {this.veterinarios = data; },
      error: (err) => console.error('Error cargando veterinarios', err)
    });
    // 👇 agregado: cargar animales
    this.citaService.getAnimales().subscribe({
      next: (data) => {this.animales = data; },
      error: (err) => console.error('Error cargando animales', err)
    });
  }

  cargarCitas() : void {
    this.citaService.getCitas().subscribe({
      next: (data) => {this.citas = [...data]; },
      error: (err) => console.error('Error cargando citas', err)
    });
  }
  
  
guardarCita(): void {
  
  if (this.editingId >0) {
    // 👇 si hay un ID, estamos editando
    this.citaService.updateCita(this.editingId, this.nuevaCita).subscribe({
      next: () => {
        this.cargarCitas();
        this.resetForm();
        this.closeModal();
        this.editingId = 0; // 👈 reset
      },
      error: (err) => console.error('Error actualizando cita', err)
    });
  } else {
    // 👇 si no hay ID, estamos creando
    this.citaService.crear(this.nuevaCita).subscribe({
      next: () => {
        this.cargarCitas();
        this.resetForm();
        this.closeModal();
      },
      error: (err) => console.error('Error creando cita', err)
    });
  }
}

// 👇 helpers
resetForm(): void {
  this.nuevaCita = { motivo: '', fecha: '', idServicio: 0, idVeterinario: 0, hora: '', idAnimal: 0 };
}

closeModal(): void {
  const modalElement = document.getElementById('modalCita');
  const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
  modal.hide();
}



// 👇 eliminar cita
eliminarCita(id: number): void {
  
  this.citaService.deleteCita(id).subscribe({
    next: (msg) => {
      console.log(msg); // "Cita X eliminada"
      // refrescar lista
      this.cargarCitas();
    },
    error: (err) => console.error('Error eliminando cita', err)
  });
}

// 👇 editar cita
editarCita(cita: Cita): void {
  
  // 👇 copiar los valores de la cita seleccionada en el objeto nuevaCita
  this.nuevaCita = {
    idAnimal: cita.id_animal,
    idServicio: cita.id_servicio,
    idVeterinario: cita.id_veterinario,
    fecha: cita.fecha,
    hora: cita.hora,
    motivo: cita.motivo
  };

  // 👇 abrir el modal manualmente
  const modalElement = document.getElementById('modalCita');
  const modal = new (window as any).bootstrap.Modal(modalElement);
  modal.show();

  // 👇 guardar el ID de la cita que se está editando
  this.editingId = cita.idCita;
}



}