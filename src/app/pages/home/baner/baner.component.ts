import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss']
})
export class BanerComponent implements OnInit {

  images: any[] = [
    {
      label: 'Lorem ipsum.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      label: 'Lorem ipsum.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
