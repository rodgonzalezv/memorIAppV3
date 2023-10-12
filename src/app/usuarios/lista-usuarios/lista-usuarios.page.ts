import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClUsuario } from '../model/ClUsuario';
import { UsuarioService } from '../usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {
  usuarios: ClUsuario[] = [];
  constructor(public restApi: UsuarioService
  , public loadingController: LoadingController
  , public alertController: AlertController
  , public route: ActivatedRoute
  , public router: Router 
  ){ }

  ngOnInit() {
    this.getUsuarios();
  }

  async getUsuarios() {
    console.log("Entrando :getUsuarios");
    // Crea un Wait (Esperar)
    const loading = await this.loadingController.create({
      message: 'Harrys Loading...'
    });
    // Muestra el Wait
    await loading.present();
    console.log("Entrando :");
    // Obtiene el Observable del servicio
    await this.restApi.getUsuarios()
      .subscribe({
        next: (res) => { 
          console.log("Res:" + res);
  // Si funciona asigno el resultado al arreglo productos
          this.usuarios = res;
          console.log("thisProductos:",this.usuarios);
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
  // Si da error, imprimo en consola.
          console.log("Err:" + err);
          loading.dismiss();
        }
      })
  }


  async borraUsuario(id: number) {
    // Confirma Primero
    this.alertaConfirmacion(id, 'Esta seguro que desea eliminar este usuario');
  }

  async alertaConfirmacion(id: number, msg: string) {
    const alert = await this.alertController.create({
      header: 'Borrar Usuario!', // Título
      message: msg,   // Mensaje
      buttons: [   // Botones
      {
        text: 'Cancelar',
        role: 'cancel', // Este botón tendrá el rol de cancelar
        handler: () => {
          // Puedes agregar aquí cualquier lógica que quieras ejecutar al cancelar
          console.log('Operación cancelada');
        }
      },
      {
          text: 'Eliminar',
          handler: () => { // Si presiona ejecuta esto
            //this.router.navigate(['']);
            this.confirmacionBorrado(id)
          }
        }
      ]
    });
    await alert.present();
  }

  
  async confirmacionBorrado(id: number) {
    alert("Eliminando ")
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.borradoUsuario(id)
      .subscribe({
        next: (res) => {
          console.log("Error", res);
          loading.dismiss();
          this.router.navigate(['/lista-usuarios']);
          window.location.reload();
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error", err);
          loading.dismiss(); //Elimina la espera
        }

      })
  }

}
