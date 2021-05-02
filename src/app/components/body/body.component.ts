import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  comentarios: any[] = [{
    nombre: "Juan Sebastian Reyes",
    alias: "@jsreyesg",
    comentario: "Hola a todos jajajajaja"
  },
  {
    nombre: "Andres Perez",
    alias: "@aperez",
    comentario: "Vienvenido al Grupo"
  }];

  nombre: any;
  comentario: any;

  constructor() { }

  ngOnInit(): void {
  }

agregarComentarios(){
  console.log(this.nombre);
  console.log(this.comentario);

  let comentarioaux ={
    nombre: this.nombre,
    alias: `@${this.nombre}`,
    comentario: this.comentario
  }
  this.comentarios.push(comentarioaux);
}

eliminar(index: any){
  this.comentarios.splice(index, 1);
}

}
