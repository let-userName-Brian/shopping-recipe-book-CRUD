import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input('class') panelClass!: string;
  isAuthenticated: boolean = false;
  private userSub!: Subscription
  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.onLogout();
    this.isAuthenticated = false;
  }

  ngOnInit(): void {
    if(this.authService.token.length > 2) {
      this.isAuthenticated = true;
    }

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
