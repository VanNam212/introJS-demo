import {Component, OnInit} from '@angular/core';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  introJS = introJs();

  constructor() {
  }

  ngOnInit(): void {
  }

  startSteps(): void {
    this.introJS
      .setOptions({
        steps: [
          {
            element: '#step11-li',
            intro: 'Welcome to your new app!'
          },
          {
            element: '#step22-li',
            intro: 'Ok, wasn\'t that fun?'
          },
          {
            element: '#step33-li',
            intro: 'let\'s keep going'
          },
          {
            element: '#step44-li',
            intro: 'More features, more fun.'
          },
          {
            element: '#step1',
            intro: 'Accessed and element in another component'
          }
        ],
        hidePrev: true,
        hideNext: false
      })
      .start();
  }

}
