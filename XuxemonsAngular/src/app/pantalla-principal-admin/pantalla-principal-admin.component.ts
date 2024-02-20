import { Component, OnInit } from '@angular/core';
import { Xuxemons } from '../models/xuxemons-model';

@Component({
  selector: 'app-pantalla-principal-admin',
  templateUrl: './pantalla-principal-admin.component.html',
  styleUrls: ['./pantalla-principal-admin.component.css']
})
export class PantallaPrincipalAdminComponent implements OnInit {
  
  xuxemonsArray: Xuxemons[] = [
    {nombre: 'Apleki',tipo: 'Tierra',tamano: 'Pequeño',img: 'assets/apleki.png'},
    {nombre: 'Elconchudo',tipo: 'Tierra',tamano: 'Grande',img: 'assets/elconchudo.png'},
    {nombre: 'Quakko',tipo: 'Agua',tamano: 'Mediano',img: 'assets/quakko.png'},
    {nombre: 'Shelly',tipo: 'Agua',tamano: 'Mediano',img: 'assets/shelly.png'},
    {nombre: 'Otto',tipo: 'Agua',tamano: 'Pequeño',img: 'assets/otto.png'},
    {nombre: 'Xocas',tipo: 'Tierra',tamano: 'Mediano',img: 'assets/xocas.png'},
    {nombre: 'Krokolisko',tipo: 'Agua',tamano: 'Grande',img: 'assets/krokolisko.png'},
    {nombre: 'Elgominas',tipo: 'Tierra',tamano: 'Mediano',img: 'assets/elgominas.png'},
    {nombre: 'Pinchimott',tipo: 'Agua',tamano: 'Mediano',img: 'assets/pinchimott.png'},
  ];
  
  xuxemonSeleccionado: Xuxemons = {nombre: '', tipo: '', tamano: '', img: ''};
  xuxemonEditado: Xuxemons = {nombre: '', tipo: '', tamano: '', img: ''}; // Almacena los datos editados del Xuxemon
  formularioEdicionVisible: boolean = false; // Indica si el formulario de edición está visible

  nuevoXuxemon: Xuxemons = { nombre: '', tipo: '', tamano: '', img: '' };
  formularioCreacionVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarFormularioEdicion(xuxemon: Xuxemons) {
    // Asigna el Xuxemon seleccionado y sus datos al formulario de edición
    this.xuxemonSeleccionado = xuxemon;
    this.xuxemonEditado = { ...xuxemon };
    // Muestra el formulario de edición
    this.formularioEdicionVisible = true;
  }

  cerrarFormularioEdicion() {
    // Resetea los datos del Xuxemon editado y oculta el formulario de edición
    this.xuxemonEditado = { nombre: '', tipo: '', tamano: '', img: '' };
    this.formularioEdicionVisible = false;
  }

  mostrarFormularioCreacion() {
    this.formularioCreacionVisible = true;
  }

  cerrarFormularioCreacion() {
    this.nuevoXuxemon = { nombre: '', tipo: '', tamano: '', img: '' };
    this.formularioCreacionVisible = false;
  }

  crearXuxemon() {
    if (this.nuevoXuxemon.nombre && this.nuevoXuxemon.tipo && this.nuevoXuxemon.tamano && this.nuevoXuxemon.img) {
      this.xuxemonsArray.push({ ...this.nuevoXuxemon });
      this.cerrarFormularioCreacion();
    } else {
      // Manejo de errores o mensajes de validación
    }
  }

  actualizarXuxemon() {
    // Encuentra el índice del Xuxemon en el array
    const index = this.xuxemonsArray.findIndex(x => x === this.xuxemonSeleccionado);
    if (index !== -1) {
      // Actualiza el Xuxemon con los nuevos datos
      this.xuxemonsArray[index] = { ...this.xuxemonEditado };
      // Cierra el formulario de edición
      this.cerrarFormularioEdicion();
    }
  }

  eliminarXuxemon(index: number) {
    // Elimina el Xuxemon del array
    this.xuxemonsArray.splice(index, 1);
  }
}