import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { ClUsuario } from '../model/ClUsuario';
import { UsuarioService } from '../usuarios.service';

@Component({
  selector: 'app-borra-usuarios',
  templateUrl: './borra-usuarios.page.html',
  styleUrls: ['./borra-usuarios.page.scss'],
})
export class BorraUsuariosPage implements OnInit {

  usuario: ClUsuario = {
    id: 1
    , first_name: ''
    , last_name: ''
    , email: ''
    , clave: ''
  };  

  constructor(
    public restApi: UsuarioService
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public route: ActivatedRoute
    , public router: Router
  ) { }

  ngOnInit() {
    this.getUsuario();
  }

  async getUsuario() {
    console.log("getUsuario ****************  ID:" + this.route.snapshot.paramMap.get('id'));
    // Creamos un Wait
    const loading = await this.loadingController.create({ message: 'Loading...' });
    // Mostramos el Wait
    await loading.present();
    await this.restApi.getUsuario(this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (res) => {
          console.log("Data *****************");
          console.log(res);
          // Si funciona la respuesta la pasamos al producto
          this.usuario = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          //Si no funcion desplegamos en consola el error
          console.log("Error usuario Página", err);
          loading.dismiss(); //Elimina la espera
        }
      })
  }
  
}


