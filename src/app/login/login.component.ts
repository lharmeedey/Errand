import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LOGINComponent {
  
constructor(private router: Router) { }

login() {
  // Perform login logic here

  // Navigate to home page after successful login
  this.router.navigateByUrl('home');

}

}
