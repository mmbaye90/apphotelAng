import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!:string ;
  email!:string|number;

  login(loginForm:NgForm){
    console.log(loginForm.form.value);
    
  }
}
