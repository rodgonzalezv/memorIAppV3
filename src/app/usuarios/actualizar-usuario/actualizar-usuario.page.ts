import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClUsuario } from '../model/ClUsuario';
import { UsuarioService } from '../usuarios.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.page.html',
  styleUrls: ['./actualizar-usuario.page.scss'],
})
export class ActualizarUsuarioPage implements OnInit {

usuarioForm!: FormGroup;
usuario: ClUsuario={id:1, first_name:'', last_name:'', email:'', clave:''};
id: any='';

constructor(public restApi: UsuarioService,
  public loadingController: LoadingController,
  public alertController: AlertController,
  public route: ActivatedRoute,
  public router: Router,
  private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("ngOnInit ID:" + this.route.snapshot.params['id']);
    // Relizamos lectura
    this.getUsuario(this.route.snapshot.params['id']);
    // Especificamos Validaciones por medio de FormGroup
    this.usuarioForm = this.formBuilder.group({
      'user_first_name': [null, Validators.required]
    });
  }
  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit ID:" + this.id)
    this.usuario.id = this.id;
    await this.restApi.actualizarUsuario(this.id, this.usuario)
      .subscribe({
        next: (res) => {
          let id = res['id'];
          //this.router.navigate([ 'detail', { outlets: { details: id }} ]);
          this.router.navigate(['/product-detail/' + this.id]);
        }
        , complete: () => { }
        , error: (err) => { console.log(err); }
      })

  }

  async getUsuario(id: number) {
    // Crea Wait
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      // Muestra Wait
      await loading.present();
      // Obtiene el Observable
      await this.restApi.getUsuario(id + "")
        .subscribe({
          next: (data) => {
            console.log("traeUsuario data****");
            console.log(data);
            // Si funciona Rescata el los datos
            this.id = data.id;
            // Actualiza los datos
            this.usuarioForm.setValue({
              user_first_name: data.first_name,
            });
            loading.dismiss();
          }
          , complete: () => { }
          , error: (err) => {
            console.log("traeUsuario Errr****+");
            console.log(err);
            loading.dismiss();
          }
        })
    }
  
    async presentAlertConfirm(msg: string) {
      const alert = await this.alertController.create({
        header: 'Warning!',
        message: msg,
        buttons: [
          {
            text: 'Okay',
            handler: () => {
              //Si funciona el actualizar navega a listar
              this.router.navigate(['/lista-usuarios/']);
            }
          }
        ]
      });
      await alert.present();
    }
  



}
