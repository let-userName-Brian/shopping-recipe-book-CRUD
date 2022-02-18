import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
constructor(private authService: AuthService, private router: Router){ }
  ngOnInit(): void {
      this.authService.autoLogin();
      if(this.authService.token.length > 2){
        this.router.navigate(['/recipes']);
      } else {
        this.router.navigate(['/login']);
      }

  }
}
