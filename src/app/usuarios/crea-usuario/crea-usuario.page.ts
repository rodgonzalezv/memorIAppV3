import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClUsuario } from '../model/ClUsuario';
import { UsuarioService } from '../usuarios.service';

@Component({
  selector: 'app-crea-usuario',
  templateUrl: './crea-usuario.page.html',
  styleUrls: ['./crea-usuario.page.scss'],
})
export class CreaUsuarioPage implements OnInit {

  userForm!: FormGroup;
  // Generalmente se usa una interface, sin embargo para jugar utilizaremos  una clase
  usuario: ClUsuario = {
    id: 1
    , first_name: 'Nombres'
    , last_name: 'Apellidos'
    , email: 'email'
    , clave: 'clave'
  };


  constructor(private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private restApi: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      "u_first_name": [null, Validators.required],
      'u_last_name': [null, Validators.required],
      'u_email': [null, Validators.required],
      'u_clave': [null, Validators.required]
    });
  }
}
