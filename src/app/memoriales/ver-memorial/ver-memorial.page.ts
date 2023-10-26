import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { apiMemoriales } from '../model/apiMemoriales';
import { MemorialesService } from '../memoriales.service';

@Component({
  selector: 'app-ver-memorial',
  templateUrl: './ver-memorial.page.html',
  styleUrls: ['./ver-memorial.page.scss'],
})
export class VerMemorialPage implements OnInit {
  
    memorial: apiMemoriales = {
      idProducto: 4
      ,codigo: ''
      ,nombreprod: ''
      ,precio: 0
      ,cantidad: 0
      ,fechaNacimiento: ''
      ,rut: 0
      ,dv: ''
      ,enfermedad: ''
      ,fonocontacto: 0
      ,categoria: ''
      ,editorial: ''
      ,raza: ''
      ,edad: 0
      ,altura: 0
      ,hrini: ''
      ,hrfin: ''
      ,direccion: ''
      ,fCreacion: ''
    };

    constructor(
      public restApi: MemorialesService
      , public loadingController: LoadingController
      , public alertController: AlertController
      , public route: ActivatedRoute
      , public router: Router
    ) { }

  ngOnInit() {
    this.getMemorial();
  }





  async getMemorial() {
    console.log("ID:" + this.route.snapshot.paramMap.get('idProducto'));
    // Creamos un Wait
    const loading = await this.loadingController.create({ message: 'Loading...' });
    // Mostramos el Wait
    await loading.present();
    await this.restApi.getMemorial(this.route.snapshot.paramMap.get('idProducto')!)
      .subscribe({
        next: (res) => {
          console.log("Data *****************");
          console.log(res);
          // Si funciona la respuesta la pasamos al producto
          this.memorial = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          //Si no funcion desplegamos en consola el error
          console.log("Error DetailProduct Página", err);
          loading.dismiss(); //Elimina la espera
        }
      })
  }

}
