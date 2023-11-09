import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService
    , private navCtrl: NavController
    , private storage: Storage
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public router: Router 
    ) {}
    
  async login() {
    const loggedIn = await this.authService.login(this.username, this.password);
    if (loggedIn) {
      this.navCtrl.navigateRoot('/home');
    } else {
      console.log('Credenciales incorrectas',);
      this.alerta('Credenciales incorrectas');
    }
  }

  async register() {
    const registered = await this.authService.register(this.username, this.password);
    if (registered) {
      console.log('Usuario registrado correctamente',this.username);
    } else {
      console.log('Error al registrar el usuario');
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
            this.router.navigate(['login']);
          }
        }
      ]
    });
    await alert.present();
  }


}
