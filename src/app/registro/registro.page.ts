import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService
    , private navCtrl: NavController
    , private storage: Storage
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public router: Router 
    ) {}
    

  async register() {
    const registered = await this.authService.register(this.username, this.password);
    if (registered) {
      console.log('Usuario registrado correctamente',this.username);
      this.alerta('Usuario registrado correctamente');
    } else {
      console.log('Error al registrar el usuario');
      this.alerta('Error al registrar el usuario');
    }
  }


  async alerta(msg: string) {
    const alert = await this.alertController.create({
      header: 'Alerta', // Título
      message: msg,   // Mensaje
      buttons: [   // Botones
      {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }


}
