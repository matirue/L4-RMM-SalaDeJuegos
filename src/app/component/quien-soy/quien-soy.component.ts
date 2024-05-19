import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [QuienSoyComponent],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goAdivinarColor(){
    this.router.navigate(["juegos/adivinarColor"]);
    // this.router.navigate([" "]);
  }

}
