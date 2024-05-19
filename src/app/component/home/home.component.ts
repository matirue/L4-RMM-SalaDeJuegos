import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // usuarioActual: string;

  constructor(private router: Router) { 
    // this.usuarioActual = servicio.nombreUsuario;
  }

  ngOnInit(): void {
  }


  //games
  goAhorcado(){ this.router.navigate(["juegos/ahorcado"]); }

  goMayorMenor(){ this.router.navigate(["juegos/mayorMenor"]); }

  goPreguntados(){ this.router.navigate(["juegos/preguntados"]); }
  
  goAdivinarColor(){ this.router.navigate(["juegos/adivinarColor"]); }

  // por el momento..
  // goAhorcado(){ this.router.navigate(["build"]); }

  // goMayorMenor(){ this.router.navigate(["build"]); }

  // goPreguntados(){ this.router.navigate(["build"]); }
  
  // goAdivinarColor(){ this.router.navigate(["build"]); }
}
