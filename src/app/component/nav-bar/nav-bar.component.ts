import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule, 
    RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  public userLogged: any;
  public ocultarLogin: boolean = true;
  public ocultarLogout: boolean = false;

  
  public load: boolean = false;

  constructor(
    private router: Router,
    private authServicio: AuthService, 
    public authFire: AngularFireAuth
  ) { 

    this.authFire.authState.subscribe(res=>{
      if(res && res.uid){
        this.userLogged = res.email;
        this.ocultarLogin = false;
        this.ocultarLogout = true;

        // console.log('User log -> ', this.userLogged);
      } else {
        
        this.ocultarLogin = true;
        this.ocultarLogout = false;

        // console.log(' No hay usuario logueado ');
      }
    });
  }

  async ngOnInit() {
  }

  login(){ this.router.navigateByUrl('login'); }

  async logOut(){
    try{
      await this.authFire.signOut();

      this.router.navigateByUrl('/');

      
    }catch(error){ console.log(error); }
    

    var modelo = this; 
  }


  home(){ this.router.navigateByUrl('home'); }
  quienSoy(){ this.router.navigateByUrl('quienSoy'); }
  goChat(){ this.router.navigateByUrl('chat'); }
  // historial(){ this.router.navigateByUrl('juegos/resultados'); }
  // encuesta(){ this.router.navigateByUrl('juegos/encuesta'); }
  goLogin() { this.router.navigateByUrl('login'); }
}
