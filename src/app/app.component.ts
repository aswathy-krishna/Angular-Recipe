import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  currentFeature = 'recipe';
  onNavigate(features :string){
    console.log(features);
    this.currentFeature = features;
  }
}
