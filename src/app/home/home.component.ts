import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public xMas = "Click for Surprise!";
  constructor() { }

  ngOnInit(): void {
  }
  clickMe():void{
    console.log("the button got clicked bro!");
    this.xMas = "Merry Christmas and a Happy New Year bro!!";
    setTimeout(() => {
      this.xMas= "Click for Surprise!";
    }, 5000);
  }
}
