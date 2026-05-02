import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CitaService } from '../../core/services/cita.service';
import { Servicio } from '../citas/model/servicio.model';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent implements OnInit, OnDestroy {

  servicios: Servicio[] = [];
  private routerSub!: Subscription;

  constructor(
    private servicioService: CitaService,
    private router: Router,
    private cdr: ChangeDetectorRef  // 👈
  ) {}

  ngOnInit(): void {
    this.cargarServicios();

    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.cargarServicios();
    });
  }

  cargarServicios(): void {
    this.servicioService.getServicios().subscribe({
      next: (data) => {
        this.servicios = data;
        this.cdr.detectChanges(); // 👈 fuerza actualización de la vista
      },
      error: (err) => console.error('Error cargando servicios', err)
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}