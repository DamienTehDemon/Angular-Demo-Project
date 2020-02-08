import { Component } from '@angular/core';

@Component({
  //the html element tag to populate
  selector: 'app-root',
  //the html for the component to use , allowed embedded variables and etc.
  templateUrl: './app.component.html',
  //the css adn styling for the html of the component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Damien';

  //runs when component initialized, jsut like any other oop 
  constructor(){
  }
}
