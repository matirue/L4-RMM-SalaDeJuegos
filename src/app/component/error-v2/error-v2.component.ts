import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-v2',
  standalone: true,
  imports: [],
  templateUrl: './error-v2.component.html',
  styleUrl: './error-v2.component.css'
})
export class ErrorV2Component {

  constructor(private router: Router) { }

  goToHome(){ this.router.navigate(["home"]); }

}
