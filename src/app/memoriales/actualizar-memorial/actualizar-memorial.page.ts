import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { apiMemoriales } from '../model/apiMemoriales';
import { MemorialesService } from '../memoriales.service';

@Component({
  selector: 'app-actualizar-memorial',
  templateUrl: './actualizar-memorial.page.html',
  styleUrls: ['./actualizar-memorial.page.scss'],
})

export class ActualizarMemorialPage implements OnInit {

  memorialForm!: FormGroup;
  memorial: apiMemoriales={idProducto:1, codigo: '', nombreprod: '', precio:1, cantidad:1, fechaNacimiento: '', rut:1, dv:'', enfermedad: '', fonocontacto: 1, categoria: '', editorial: '', raza: '', edad: 1, altura:1, hrini: '', hrfin: '', direccion: '', fCreacion:''};
  idProducto: any='';

  constructor(public restApi: MemorialesService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.getMemorial(this.route.snapshot.params['id']);
      // Especificamos Validaciones por medio de FormGroup
      this.memorialForm = this.formBuilder.group({
        'memorial_nombre': [null, Validators.required],
        'memorial_cantidad': [null, Validators.required],
        'memorial_precio': [null, Validators.required]
      });
    }


    async onFormSubmit(form: NgForm) {
      console.log("onFormSubmit ID:" + this.idProducto)
      this.memorial.idProducto = this.idProducto;
      await this.restApi.actualizarMemorial(this.idProducto, this.memorial)
        .subscribe({
          next: (res) => {
            let id = res['idProducto'];
            //this.router.navigate([ 'detail', { outlets: { details: id }} ]);
            this.router.navigate(['/lista-memoriales/' + this.idProducto]);
            window.location.reload();
          }
          , complete: () => { }
          , error: (err) => { console.log(err); }
        })
  
    }


    async getMemorial(idProducto: number) {
        const loading = await this.loadingController.create({
          message: 'Loading...'
        });
        // Muestra Wait
        await loading.present();
        // Obtiene el Observable
        await this.restApi.getMemorial(idProducto + "")
          .subscribe({
            next: (data) => {
              console.log("trae datos del memorial****");
              console.log(data);
              // Si funciona Rescata el los datos
              this.idProducto = data.idProducto;
              // Actualiza los datos
              this.memorialForm.setValue({
                memorial_nombre: data.nombreprod,
                memorial_cantidad: data.cantidad,
                memorial_precio: data.precio
              });
              loading.dismiss();
            }
            , complete: () => { }
            , error: (err) => {
              console.log("trae memorial error****+");
              console.log(err);
              loading.dismiss();
            }
          })
      }


      async presentAlertConfirm(msg: string) {
        const alert = await this.alertController.create({
          header: 'Advertencia',
          message: msg,
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                //Si funciona el actualizar navega a listar
                this.router.navigate(['/lista-memoriales']);
                window.location.reload();
              }
            }
          ]
        });
        await alert.present();
      }
          



}

