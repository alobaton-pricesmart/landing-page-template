import { Component, OnInit } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: any[] = [
    {
      title: 'pages.home.title',
      link: '.',
      fragment: 'baner',
      icon: 'home-outline'
    },
    {
      title: 'pages.home.aboutUs.title',
      link: '.',
      fragment: 'aboutUs',
      icon: 'bookmark-outline'
    },
    {
      title: 'pages.home.staff.title',
      link: '.',
      fragment: 'staff',
      icon: 'people-outline'
    },
    {
      title: 'pages.home.contact.title',
      link: '.',
      fragment: 'contact',
      icon: 'phone-outline'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
