import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  // declaring a variable to use in the if else block written in HTML component.
  public age:number = 20;
  // declaring another variable for switch case statement.
  public location: string = "Delhi";
  // Creating an array to use the ngFor statement.
  public myArr = ["Ashish", "Kumar", "Swati", "Rani", "Sahuji", "Muckhiya Ji"];
  constructor() { }

  ngOnInit(): void {
  }

}
