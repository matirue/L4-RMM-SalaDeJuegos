import { Component, OnInit } from '@angular/core';
import { User } from '../../clases/user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {

  user: User = new User();
  
  public load: boolean = false;

  public mensajeValidacion = {
    'email': [
      {tipo: 'required', mesnaje: 'El email es requerido'},
      {tipo: 'email', mesnaje: 'Debe respetar el formato example@example.com.'},
    ],
    'password': [
      {tipo: 'required', mesnaje: 'El password es requerido'},
      {tipo: 'minlength', mesnaje: 'La Contraseña debe ttener un minimo de 6 caracteres.'},
    ]
  };

  mensajeAlert: string = '';
  mostrarError: boolean = false;

  registroForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
  });  

  constructor(
    private rutas: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { 
    this.registroForm = this.formBuilder.group({
      email:['', 
            [Validators.required, 
            Validators.email,
            Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {    
  }

  /**campo email */
  get email_campo(){
    return this.registroForm.get('email');
  }
  get eamil_campoValido(){
    return this.email_campo?.touched && this.email_campo.valid;
  }
  get eamil_campoInvalido(){
    return this.email_campo?.touched && this.email_campo.invalid;
  }

  /**campo password */
  get password_campo(){
    return this.registroForm.get('password');
  }
  get password_campoValido(){
    return this.password_campo?.touched && this.password_campo.valid;
  }
  get password_campoInvalido(){
    return this.password_campo?.touched && (this.password_campo.value)!.length<6;
  }

  /**
   * Registro el usuario
   */
  async Registar(){

    const { email, password } = this.registroForm.value;

    if (email != null && password != null){
      try { 
          const usuario = await this.authService.register(email, password);

          if(usuario) { 
            this.IrHome();
          } else {
            this.mensajeAlert = ' El email: "' + email + '" ya existe';
            this.mostrarError = true;
          }  
      }catch(error){
        console.log(error);
      }
    }

    


     
  }

  

  IrHome() { 
    var modelo = this;
    this.load = true;

    setTimeout(function(){
      modelo.rutas.navigate(['home']);
    }, 2000); 
  }

  Login(){
    this.rutas.navigate(['login']);
  }

}
