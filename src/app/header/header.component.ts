import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input('class') panelClass!: string;
  constructor(private storeDataService: DataStorageService) { }

  saveData(){
    this.storeDataService.storeRecipes();
  }

  fetchData(){
    this.storeDataService.fetchRecipes().subscribe();
  }

  ngOnInit(): void {
  }

}
