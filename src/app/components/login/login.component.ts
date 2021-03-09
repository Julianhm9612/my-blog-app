import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  get user(): any { return this.loginForm.get('user'); }
  get password(): any { return this.loginForm.get('password'); }

  public buildForm(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  public login(): void {
    // TODO: Servicio de autenticación
    if (this.user.value === 'user' && this.password.value === 'password') {
      sessionStorage.setItem('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
      this.router.navigate(['/posts']);
    } else {

    }
  }

}
