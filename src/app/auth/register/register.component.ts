import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CrudsServicesService } from '../../control/CrudsServices/CrudsServices.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: CrudsServicesService,
    private tosterService: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.RegisterForm = this.fb.group({
      username: [
        null,
        [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)],
      ],

      email: [
        null,
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
        ],
      ],

      password: [null, Validators.required],

      firstname: [
        null,
        [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)],
      ],

      lastname: [
        null,
        [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)],
      ],

      middlename: [
        null,
        [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)],
      ],

      mobile: [
        null,
        [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      ],
    });
  }

  DoneRegister() {
    let body = {
      Username: this.RegisterForm.controls.username.value,
      Email: this.RegisterForm.controls.email.value,
      Password: this.RegisterForm.controls.password.value,
      FirstName: this.RegisterForm.controls.firstname.value,
      LastName: this.RegisterForm.controls.lastname.value,
      MiddleName: this.RegisterForm.controls.middlename.value,
      Phone: this.RegisterForm.controls.mobile.value,
      IsAdmin: false,
    };
    this.apiService.PostMethod('Users', body).subscribe(
      (data) => {
        this.tosterService.success(
          'Registeration done successfully , please login',
          'Right operation'
        );
        // this.router.navigateByUrl('./login');
        this.RegisterForm.reset();
      },
      (error) => {
        this.tosterService.error(
          'Registeration faild , please try again',
          'Wrong operation'
        );
      }
    );
  }
}
