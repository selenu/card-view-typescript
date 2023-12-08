import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts=[
  {
    title:'Mountain Bike',
    imageUrl:'assets/biking.jpeg',
    username:'cbdag',
    content:'I ride so fast.'
  },
  {
    title:'Climbing',
    imageUrl:'assets/mountain.jpeg',
    username:'abdag',
    content:'Lets go to mountain climbing.'
  },
  {
    title:'Walking in Nature',
    imageUrl:'assets/tree.jpeg',
    username:'sedag',
    content:'Lets walk in nature.'
  }
  ]
}
