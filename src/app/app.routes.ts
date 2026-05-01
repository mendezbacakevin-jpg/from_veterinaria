import { Routes } from '@angular/router';
import { CitasListComponent } from './features/citas/pages/citas-list/citas-list.component';
import { ServiciosListComponent } from './features/servicios/pages/servicios-list/servicios-list.component';

export const routes: Routes = [ { path: '', redirectTo: 'citas', pathMatch: 'full' },
  { path: 'citas', component: CitasListComponent },
  { path: 'servicios', component: ServiciosListComponent }
];
