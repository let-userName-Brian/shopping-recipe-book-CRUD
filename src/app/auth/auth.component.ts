import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  headerText: string = 'Sign up';
  isLoading: boolean = false;
  err: string = '';
  constructor(private auth: AuthService, private router: Router) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.headerText = this.isLoginMode ? 'Sign up' : 'Login';
  }


  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.auth.signin(email, password);
    }
    else {
      authObs = this.auth.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        this.isLoading = false;
        this.err = errorMessage;
        setTimeout(() => {
          this.err = '';
        }, 2000);
      }
    );


    form.reset()
  }

  ngOnInit(): void {

  }

}
