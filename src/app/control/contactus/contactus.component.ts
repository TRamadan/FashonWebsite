import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CrudsServicesService } from '../CrudsServices/CrudsServices.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  ContactForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiServices: CrudsServicesService
  ) {}

  ngOnInit() {
    this.ContactForm = this.fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  SendData() {
    let body = {
      name: this.ContactForm.controls.name.value,
      phone: this.ContactForm.controls.phone.value,
      email: this.ContactForm.controls.email.value,
      message: this.ContactForm.controls.message.value,
    };
    this.apiServices.PostMethod('ContactUs', body).subscribe(
      (data) => {
        alert('Done send neede data');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
