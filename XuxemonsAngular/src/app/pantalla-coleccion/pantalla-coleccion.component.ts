import { Component, OnInit } from '@angular/core';
import { Xuxemons } from '../models/xuxemons-model';

@Component({
  selector: 'app-pantalla-coleccion',
  templateUrl: './pantalla-coleccion.component.html',
  styleUrls: ['./pantalla-coleccion.component.css']
})
export class PantallaColeccionComponent implements OnInit {

  xuxemonsArray: Xuxemons[] = [
    {nombre: 'Apleki',tipo: 'Tierra',tamano: 'Pequeño',img: 'assets/apleki.png'},
    {nombre: 'Elconchudo',tipo: 'Tierra',tamano: 'Grande',img: 'assets/elconchudo.png'},
    {nombre: 'Quakko',tipo: 'Agua',tamano: 'Mediano',img: 'assets/quakko.png'},
    {nombre: 'Apleki',tipo: 'Tierra',tamano: 'Pequeño',img: 'assets/apleki.png'},
    {nombre: 'Elconchudo',tipo: 'Tierra',tamano: 'Grande',img: 'assets/elconchudo.png'},
    {nombre: 'Quakko',tipo: 'Agua',tamano: 'Mediano',img: 'assets/quakko.png'},
    {nombre: 'Apleki',tipo: 'Tierra',tamano: 'Pequeño',img: 'assets/apleki.png'},
    {nombre: 'Elconchudo',tipo: 'Tierra',tamano: 'Grande',img: 'assets/elconchudo.png'},
    {nombre: 'Quakko',tipo: 'Agua',tamano: 'Mediano',img: 'assets/quakko.png'},
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
