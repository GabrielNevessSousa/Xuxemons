import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { PantallaColeccionComponent } from './pantalla-coleccion/pantalla-coleccion.component';

const routes: Routes = [
  { 
    path: '', pathMatch: 'full', redirectTo: 'pag-principal' 
  },
  { 
    path: 'pag-principal', 
    component:  PantallaPrincipalComponent,
  },
  { 
    path: 'xuxedex', 
    component:  PantallaColeccionComponent,
  },
 

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
