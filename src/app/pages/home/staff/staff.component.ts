import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staff: any[] = [
    {
      name: 'Jhon Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      socialItems: [
        {
          title: 'pages.home.contact.social.facebook',
          icon: 'facebook-outline'
        }
      ]
    },
    {
      name: 'Jhon Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      socialItems: [
        {
          title: 'pages.home.contact.social.facebook',
          icon: 'facebook-outline'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
