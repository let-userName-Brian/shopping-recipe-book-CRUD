import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() 
  title: string = 'food-shopping';
  navigatedLocation:string = "recipe";



  onNavigate(feature: string) {
    this.navigatedLocation = feature;
  }

}
