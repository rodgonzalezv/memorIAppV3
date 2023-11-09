import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { apiMemoriales } from '../model/apiMemoriales';
import { MemorialesService } from '../memoriales.service';

@Component({
  selector: 'app-lista-memoriales',
  templateUrl: './lista-memoriales.page.html',
  styleUrls: ['./lista-memoriales.page.scss'],
  providers: [MemorialesService], // Asegúrate de que está aquí
})
export class ListaMemorialesPage implements OnInit {
  memoriales: apiMemoriales[] = [];
  constructor(public restApi: MemorialesService
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public route: ActivatedRoute
    , public router: Router 
    ) { }

  ngOnInit() {
    this.getMemoriales();
  }


  async getMemoriales() {
    console.log("Entrando :getMemoriales");
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    console.log("Entrando :");
    await this.restApi.getMemoriales()
      .subscribe({
        next: (res) => { 
          console.log("Res:" + res);
          this.memoriales = res;
          console.log("memoriales:",this.memoriales);
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Err:" + err);
          loading.dismiss();
        }
      })
  }




  async borrarMemorial(id: number) {
    // Confirma Primero
    this.alertaConfirmacion(id, 'Esta seguro que desea eliminar este Memorial');
  }

  async alertaConfirmacion(id: number, msg: string) {
    const alert = await this.alertController.create({
      header: 'Borrar Memorial!', // Título
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
    await this.restApi.borrarMemorial(id)
      .subscribe({
        next: (res) => {
          console.log("Error", res);
          loading.dismiss();
          this.router.navigate(['lista-memoriales']);
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
