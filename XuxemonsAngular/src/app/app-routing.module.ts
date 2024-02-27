import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { PantallaColeccionComponent } from './pantalla-coleccion/pantalla-coleccion.component';
import { PantallaPrincipalAdminComponent } from './pantalla-principal-admin/pantalla-principal-admin.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { 
    path: '', pathMatch: 'full', redirectTo: 'login' 
  },
  { 
    path: 'pag-principal', 
    component:  PantallaPrincipalComponent,
  },

  { 
    path: 'login', 
    component:  LoginComponent,
  },

  { 
    path: 'registro', 
    component:  RegistroComponent,
  },

  { 
    path: 'pantalla-coleccion', 
    component:  PantallaColeccionComponent,
  },


  
  { 
    path: 'pag-principal-admin', 
    component:  PantallaPrincipalAdminComponent,
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
