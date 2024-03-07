import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

type LoginObj = {
  userName: string;
  password: string;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: LoginObj = {
    userName: '',
    password: ''
  };

  constructor(private router: Router) { }

  onLogin() {
    if (this.loginObj.userName === 'admin' && this.loginObj.password === 'admin') {
      console.log(this.loginObj);
      this.router.navigateByUrl('/products');
    } else {
      alert('Invalid credentials');
    }

  }

}
