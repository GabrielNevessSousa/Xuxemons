import { Component, OnInit } from '@angular/core';
import { Xuxemons } from '../models/xuxemons-model';

@Component({
  selector: 'app-pantalla-coleccion',
  templateUrl: './pantalla-coleccion.component.html',
  styleUrls: ['./pantalla-coleccion.component.css']
})
export class PantallaColeccionComponent implements OnInit {

  xuxemonsArray: Xuxemons[] = [
    {id_xuxemon: 3, nombre: 'Apleki',tipo: 'Tierra',tamano: 'Pequeño',img: 'assets/apleki.png'},
    {id_xuxemon: 3,nombre: 'Elconchudo',tipo: 'Tierra',tamano: 'Grande',img: 'assets/elconchudo.png'},
    {id_xuxemon: 3,nombre: 'Quakko',tipo: 'Agua',tamano: 'Mediano',img: 'assets/quakko.png'},
    {id_xuxemon: 3,nombre: 'Shelly',tipo: 'Agua',tamano: 'Mediano',img: 'assets/shelly.png'},
    {id_xuxemon: 3,nombre: 'Otto',tipo: 'Agua',tamano: 'Pequeño',img: 'assets/otto.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
