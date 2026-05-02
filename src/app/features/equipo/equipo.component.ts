import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔴 IMPORTANTE


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  imports: [CommonModule], // 🔴 AQUÍs

  
})
export class EquipoComponent {

  equipo = [
    {
      nombre: 'Dr. Juan Pérez',
      especialidad: 'Especialista en Cirugías',
      descripcion: 'Más de 10 años de experiencia en cirugía veterinaria.',
      imagen: '/images/juanPerez.png'
    },
    {
      nombre: 'Dra. Ana Gómez',
      especialidad: 'Medicina General y Felinos',
      descripcion: 'Apasionada por la salud felina.',
      imagen: '/images/anagomez.png'
    },
    {
      nombre: 'Carlos Rodríguez',
      especialidad: 'Asistente Veterinario',
      descripcion: 'Experto en manejo de mascotas.',
      imagen: '/images/carlosRodriguez.png'
    },
    {
      nombre: 'Laura Martínez',
      especialidad: 'Especialista en Grooming',
      descripcion: 'Cuidado estético profesional.',
      imagen: '/images/laura.png'
    }
  ];

}