import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';


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
    private storeDataService: DataStorageService,
    private authService: AuthService
  ) { }

  saveData() {
    this.storeDataService.storeRecipes();
  }

  fetchData() {
    this.storeDataService.fetchRecipes().subscribe();
  }

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
