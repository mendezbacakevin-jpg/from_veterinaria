import { Routes } from '@angular/router';
import { CitasListComponent } from './features/citas/pages/citas-list/citas-list.component';
import { ServiciosListComponent } from './features/servicios/pages/servicios-list/servicios-list.component';
import { NosotrosComponent } from './features/nosotros/nosotros.component';
import { ServiciosComponent } from './features/servicio/servicios.component';
import { EquipoComponent } from './features/equipo/equipo.component';
import { PrincipalComponent } from './features/principal/principal.component';
import { ContactoComponent } from './features/contacto/contacto.component';
import { LoginComponent } from './features/login/login.component';
import { RegistroComponent } from './features/registro/registro.component';

export const routes: Routes = [ 
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'citas', component: CitasListComponent },
  { path: 'equipo', component: EquipoComponent },
   { path: 'contacto', component: ContactoComponent },
  { path: 'servicios-list', component: ServiciosListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
];
