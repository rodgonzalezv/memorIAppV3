import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { apiMemoriales } from '../model/apiMemoriales';
import { MemorialesService } from '../memoriales.service';

@Component({
  selector: 'app-lista-memoriales',
  templateUrl: './lista-memoriales.page.html',
  styleUrls: ['./lista-memoriales.page.scss'],
})
export class ListaMemorialesPage implements OnInit {

  memoriales: apiMemoriales[] = [];
  constructor(public restApi: MemorialesService
    , public loadingController: LoadingController
    , public router: Router) { }

  ngOnInit() {
    this.getMemoriales();
  }

  async getMemoriales() {
    console.log("Entrando :getMemoriales");
    // Crea un Wait (Esperar)
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    // Muestra el Wait
    await loading.present();
    console.log("Entrando :");
    // Obtiene el Observable del servicio
    await this.restApi.getMemoriales()
      .subscribe({
        next: (res) => { 
          console.log("Res:" + res);
  // Si funciona asigno el resultado al arreglo productos
          this.memoriales = res;
          console.log("thisProductos:",this.memoriales);
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


}
