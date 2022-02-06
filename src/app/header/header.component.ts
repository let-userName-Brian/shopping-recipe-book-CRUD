import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();
@Input('class') panelClass!: string;
  constructor() { }

  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }
  ngOnInit(): void {
  }

}
