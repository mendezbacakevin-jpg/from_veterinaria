import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cita, CitaRequest } from '../../model/cita.model';
import { CitaService } from '../../../../core/services/cita.service';
import { FormsModule } from '@angular/forms';
import { Servicio } from '../../model/servicio.model';
import { Veterinario } from '../../model/veterinario.model';
import { Animal } from '../../model/animal.model';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-citas-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './citas-list.component.html'
})
export class CitasListComponent implements OnInit, OnDestroy {
  citas: Cita[] = [];
  editingId: number = 0;
  servicios: Servicio[] = [];
  veterinarios: Veterinario[] = [];
  animales: Animal[] = [];
  nuevaCita: CitaRequest = {
    motivo: '', fecha: '', idServicio: 0, idVeterinario: 0, hora: '', idAnimal: 0
  };

  private routerSub!: Subscription;

  constructor(
    private citaService: CitaService,
    private router: Router,
    private cdr: ChangeDetectorRef  // 👈
  ) {}

  ngOnInit(): void {
    this.cargarTodo();

    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.cargarTodo();
    });
  }

  cargarTodo(): void {
    this.cargarCitas();

    this.citaService.getServicios().subscribe({
      next: (data) => { this.servicios = data; this.cdr.detectChanges(); },
      error: (err) => console.error('Error cargando servicios', err)
    });

    this.citaService.getVeterinarios().subscribe({
      next: (data) => { this.veterinarios = data; this.cdr.detectChanges(); },
      error: (err) => console.error('Error cargando veterinarios', err)
    });

    this.citaService.getAnimales().subscribe({
      next: (data) => { this.animales = data; this.cdr.detectChanges(); },
      error: (err) => console.error('Error cargando animales', err)
    });
  }

  cargarCitas(): void {
    this.citaService.getCitas().subscribe({
      next: (data) => { this.citas = [...data]; this.cdr.detectChanges(); }, // 👈
      error: (err) => console.error('Error cargando citas', err)
    });
  }

  // ... el resto de tus métodos se quedan igual
  guardarCita(): void {
    if (this.editingId > 0) {
      this.citaService.updateCita(this.editingId, this.nuevaCita).subscribe({
        next: () => {
          this.cargarCitas();
          this.resetForm();
          this.closeModal();
          this.editingId = 0;
        },
        error: (err) => console.error('Error actualizando cita', err)
      });
    } else {
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

  resetForm(): void {
    this.nuevaCita = { motivo: '', fecha: '', idServicio: 0, idVeterinario: 0, hora: '', idAnimal: 0 };
  }

  closeModal(): void {
    const modalElement = document.getElementById('modalCita');
    const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  eliminarCita(id: number): void {
    this.citaService.deleteCita(id).subscribe({
      next: (msg) => {
        console.log(msg);
        this.cargarCitas();
      },
      error: (err) => console.error('Error eliminando cita', err)
    });
  }

  editarCita(cita: Cita): void {
    this.nuevaCita = {
      idAnimal: cita.id_animal,
      idServicio: cita.id_servicio,
      idVeterinario: cita.id_veterinario,
      fecha: cita.fecha,
      hora: cita.hora,
      motivo: cita.motivo
    };

    const modalElement = document.getElementById('modalCita');
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();

    this.editingId = cita.idCita;
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}