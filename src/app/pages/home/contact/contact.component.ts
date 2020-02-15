import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormComponent } from 'src/app/shared/util/form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends FormComponent implements OnInit {

  form: FormGroup;
  isForm: any;

  lat = 51.678418;
  lng = 7.809007;

  cardItems: any[] =  [
    {
      title: 'pages.home.contact.card.address',
      icon: 'pin-outline'
    }
  ];

  socialItems: any[] = [
    {
      title: 'pages.home.contact.social.facebook',
      icon: 'facebook-outline'
    }
  ];

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.isForm = Promise.resolve(
      this.form = this.formBuilder.group({
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        message: new FormControl(null, [Validators.required])
      })
    );
  }

  send() {

  }

}
