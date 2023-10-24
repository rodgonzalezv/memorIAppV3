import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Añadir Memorial', url: 'product-add', icon: 'mail' },
    { title: 'Listado Memoriales', url: 'product-list', icon: 'mail' },
    { title: 'Crea Usuarios', url: 'crea-usuarios', icon: 'mail' },
    { title: 'Listado Usuarios', url: 'lista-usuarios', icon: 'mail' },
    { title: 'Camara', url: 'camera', icon: 'camera' },
    /*{ title: 'Producto/Editar', url: 'product-edit', icon: 'mail' },*/


  ];
  public labels = ['Proyecto MemorIA - RG&BP'];
  constructor() {}
}
