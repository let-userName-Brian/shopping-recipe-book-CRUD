import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

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
  constructor(private auth: AuthService) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.headerText = this.isLoginMode ? 'Sign up' : 'Login';
  }


  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      //this.auth.login(email, password);
    }
    else {
      this.auth.signup(email, password)
        .subscribe(responseData => {
          console.log(responseData);
          this.isLoading = false;
        },
          errorRes => {
            this.err = "Oh no! Something went wrong. Please try again later." + errorRes.error.error.message;
            this.isLoading = false;
          });
    }
    form.reset()
  }

  ngOnInit(): void {

  }

}
