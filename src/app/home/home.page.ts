import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService
  , private navCtrl: NavController
  , public router: Router 
  ) {}

  async logout() {
    await this.authService.logout();
    this.navCtrl.navigateRoot('/login');
  }

  camara() {
    this.router.navigate(['/camara']);
  }

  gps() {
    this.router.navigate(['/gps']);
  }
  productos() {
    this.router.navigate(['/product-list']);
  }

}

