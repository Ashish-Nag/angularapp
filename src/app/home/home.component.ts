import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public xMas = "Click for Surprise!";
  posts$= {};
  constructor(private api: ApiService) {
    this.api.checkIfWorks();
  }

  ngOnInit() {
    return this.api.getData().subscribe(
      api => this.posts$ = api

      // TODO learn how to interpolate data into html using angular directives. ngFor isn't for objects.
    );
  }
  clickMe():void{
    console.log("the button got clicked bro!");
    this.xMas = "Merry Christmas and a Happy New Year bro!!";
    setTimeout(() => {
      this.xMas= "Click for Surprise!";
    }, 5000);
  }
}
