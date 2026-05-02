import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 🔴 FALTA ESTO


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule,
     RouterModule // 🔴 AGREGA ESTO
  ],
  templateUrl: './principal.component.html',
  
  
})
export class PrincipalComponent {

  servicios = [
    {
      nombre: 'Medicina General',
      imagen: '/images/cuadro1-Photoroom.png',
      ruta: '/medicinageneral'
    },
    {
      nombre: 'Cirugías Especializadas',
      imagen: '/images/cuadro2.png',
      ruta: '/cirugias'
    },
    {
      nombre: 'Laboratorio',
      imagen: '/images/cruadro5.png',
      ruta: '/laboratorio'
    },
    {
      nombre: 'Peluquería Canina',
      imagen: '/images/cuadro4.png',
      ruta: '/peluqueria'
    },
    {
      nombre: 'Vacunación',
      imagen: '/images/cuadro5.png',
      ruta: '/vacunacion'
    },
    {
      nombre: 'Guardería',
      imagen: '/images/cuadro6.png',
      ruta: '/guarderia'
    }
  ];

  testimonios = [
    {
      nombre: 'Ana Martínez',
      mensaje: 'Excelente atención. Mi perrita fue tratada con mucho cariño.',
      detalle: 'Cliente frecuente',
      imagen: '/images/cliente1.png'
    },
    {
      nombre: 'Luis Pérez',
      mensaje: 'Muy profesionales. Todo salió perfecto.',
      detalle: 'Dueño de gato',
      imagen: '/images/cliente2.png'
    },
    {
      nombre: 'Carla Gómez',
      mensaje: 'Ambiente limpio y atención excelente.',
      detalle: 'Cliente feliz',
      imagen: '/images/cliente3.png'
    }
  ];
}