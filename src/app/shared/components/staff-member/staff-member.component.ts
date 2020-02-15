import { Component, OnInit, Input } from '@angular/core';
import { StaffMember } from './../../../model/staff-member.interface';


@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html'
})
export class StaffMemberComponent implements OnInit {
  @Input()
  staffMember: StaffMember;

  constructor() { }

  ngOnInit() {
  }

}
