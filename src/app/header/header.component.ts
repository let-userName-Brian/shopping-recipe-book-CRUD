import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input('class') panelClass!: string;
  isAuthenticated: boolean = false;
  private userSub!: Subscription
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
     this.isAuthenticated = !!user;
    }
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
