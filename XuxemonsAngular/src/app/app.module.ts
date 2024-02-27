import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { PantallaPrincipalAdminComponent } from './pantalla-principal-admin/pantalla-principal-admin.component';
import { PantallaColeccionComponent } from './pantalla-coleccion/pantalla-coleccion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
