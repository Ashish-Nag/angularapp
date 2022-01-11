import { Component, OnInit } from '@angular/core';
import { trigger, style, state, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.css'],
  animations: [
    trigger('anim', [
      state('open', style({
        height: '400px',
        opacity: 0.5,
        backgroundColor: 'violet'
      })),
      state('closed', style({
        height: '300px',
        opacity: 1,
        backgroundColor : 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ])
    ])
  ]
})
export class AnimComponent implements OnInit {

  // * declaring a variable isOpen for animation
  isOpen:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  //  * creating a fucntion toggle for the animation.
  toggle(): void {
    this.isOpen = !this.isOpen;
  }

}
