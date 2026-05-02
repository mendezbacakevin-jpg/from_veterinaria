import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  
})
export class ServiciosComponent {

  usuario: string | null = null; // simula login

  servicios = [
    {
      titulo: 'Consulta General',
      descripcion: 'Evaluamos la salud de tu mascota con diagnóstico profesional.',
      icono: 'fas fa-stethoscope'
    },
    {
      titulo: 'Vacunación',
      descripcion: 'Protegemos a tus mascotas con vacunas seguras.',
      icono: 'fas fa-syringe'
    },
    {
      titulo: 'Cirugía Veterinaria',
      descripcion: 'Procedimientos seguros con tecnología avanzada.',
      icono: 'fas fa-user-md'
    },
    {
      titulo: 'Desparasitación',
      descripcion: 'Eliminación de parásitos internos y externos.',
      icono: 'fas fa-pills'
    },
    {
      titulo: 'Diagnóstico por Imágenes',
      descripcion: 'Rayos X y ecografías.',
      icono: 'fas fa-x-ray'
    },
    {
      titulo: 'Cuidado Dental',
      descripcion: 'Limpieza y salud bucal.',
      icono: 'fas fa-tooth'
    }
  ];

  logout() {
    this.usuario = null;
  }
}