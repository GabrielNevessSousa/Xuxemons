import { Component, OnInit } from '@angular/core';
import { Xuxemons } from '../models/xuxemons-model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pantalla-principal-admin',
  templateUrl: './pantalla-principal-admin.component.html',
  styleUrls: ['./pantalla-principal-admin.component.css']
})
export class PantallaPrincipalAdminComponent implements OnInit {

  XuxemonsArray : Xuxemons[] = [];
  isResultLoaded = false;
  isUpdateFromActive = false;

  nombre: string="";
  tipo: string="";
  img: string="";
  tamano: string="";
  id_xuxemon: any;

constructor(private http: HttpClient) {
  this.getAllXuxemons();
}

getAllXuxemons() {
  this.http.get("http://127.0.0.1:8000/api/xuxemons")
  .subscribe((resultData: any)=>
  {
    this.isResultLoaded = true;
    console.log(resultData);
    this.XuxemonsArray = resultData;
  }

  )
}

register() {
  let bodyData = {
    "nombre" : this.nombre,
    "tipo" : this.tipo,
    "img" : this.img,
    "tamano" : this.tamano,
  };

  this.http.post("http://127.0.0.1:8000/api/xuxemons", bodyData).subscribe((resultData: any)=>
  {
    console.log(resultData);
    alert("Xuxemon registrado correctamente");
    this.getAllXuxemons();
    this.nombre = '';
    this.tipo = '';
    this.img = '';
    this.tamano = '';
  });
}

save(){
  this.register();
}

UpdateRecords(data: Xuxemons) {
  let bodyData = {
    "id_xuxemon": data.id_xuxemon,
    "nombre" : data.nombre,
    "tipo" : data.tipo,
    "img" : data.img,
    "tamano" : data.tamano,
  };

  console.log(bodyData);  

  this.http.put("http://127.0.0.1:8000/api/xuxemons" + "/" + bodyData.id_xuxemon, bodyData).subscribe((data: any)=>
  {
    console.log(data.id_xuxemon);
    console.log(data);
    alert("xuxemon actualizado correctamente")
    this.getAllXuxemons();
    this.nombre = '';
    this.tipo = '';
    this.img = '';
    this.tamano = '';
  }
  )
}

setDelete(data: any) {
  this.http.delete("http://127.0.0.1:8000/api/xuxemons" + "/" + data.id_xuxemon).subscribe((resultData: any)=>
  {
    console.log(data.id_xuxemon);
    console.log(resultData);
    alert("xuxemon eliminado correctamente")
    this.getAllXuxemons();
  }
  )
}

  xuxemonSeleccionado: Xuxemons = {id_xuxemon: 0,nombre: '', tipo: '', tamano: '', img: ''};
  xuxemonEditado: Xuxemons = {id_xuxemon: 0,nombre: '', tipo: '', tamano: '', img: ''}; // Almacena los datos editados del Xuxemon
  formularioEdicionVisible: boolean = false; // Indica si el formulario de edición está visible

  nuevoXuxemon: Xuxemons = {id_xuxemon: 0,nombre: '', tipo: '', tamano: '', img: '' };
  formularioCreacionVisible: boolean = false;


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
    this.xuxemonEditado = {id_xuxemon: 0, nombre: '', tipo: '', tamano: '', img: '' };
    this.formularioEdicionVisible = false;
  }

  mostrarFormularioCreacion() {
    this.formularioCreacionVisible = true;
  }

  cerrarFormularioCreacion() {
    this.nuevoXuxemon = {id_xuxemon: 0,nombre: '', tipo: '', tamano: '', img: '' };
    this.formularioCreacionVisible = false;
  }

  crearXuxemon() {
    if (this.nuevoXuxemon.nombre && this.nuevoXuxemon.tipo && this.nuevoXuxemon.tamano && this.nuevoXuxemon.img) {
      this.XuxemonsArray.push({ ...this.nuevoXuxemon });
      this.cerrarFormularioCreacion();
    } else {
      // Manejo de errores o mensajes de validación
    }
  }

  actualizarXuxemon() {
    // Encuentra el índice del Xuxemon en el array
    const index = this.XuxemonsArray.findIndex(x => x === this.xuxemonSeleccionado);
    if (index !== -1) {
      // Actualiza el Xuxemon con los nuevos datos
      this.XuxemonsArray[index] = { ...this.xuxemonEditado };
      // Cierra el formulario de edición
      this.cerrarFormularioEdicion();
    }
  }

  eliminarXuxemon(index: number) {
    // Elimina el Xuxemon del array
    this.XuxemonsArray.splice(index, 1);
  }
  
  crearXuxemonRandom() {  
    // Selecciona un índice aleatorio dentro del rango de la lista de Xuxemons disponibles
    const indiceAleatorio = Math.floor(Math.random() * this.XuxemonsArray.length);
    // Obtiene el Xuxemon aleatorio
    const xuxemonAleatorio = this.XuxemonsArray[indiceAleatorio];
    // Añade el Xuxemon aleatorio a la colección de usuarios
    this.XuxemonsArray.push({ ...xuxemonAleatorio });
  }
}
