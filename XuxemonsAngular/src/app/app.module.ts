import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { PantallaPrincipalAdminComponent } from './pantalla-principal-admin/pantalla-principal-admin.component';
import { PantallaColeccionComponent } from './pantalla-coleccion/pantalla-coleccion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PantallaPrincipalComponent,
    PantallaPrincipalAdminComponent,
    PantallaColeccionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
