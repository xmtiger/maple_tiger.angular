import { Component, OnInit } from '@angular/core';

import * as c3 from 'c3';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const chart = c3.generate({
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
      },
      bar: {
        width: {
          ratio: 0.25
        }
      }
    });
  }

}
