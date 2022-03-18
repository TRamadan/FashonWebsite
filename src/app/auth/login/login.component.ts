import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudsServicesService } from '../../control/CrudsServices/CrudsServices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiServices: CrudsServicesService,
    private tosterService: ToastrService
  ) {}

  ngOnInit() {
    this.LoginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }

  //here is the function needed to make login for a registered user
  DoneLogin() {
    if (this.LoginForm.invalid) {
      this.tosterService.error(
        'Please fill required fields',
        'Wrong operation'
      );
    } else {
      let body = {
        username: this.LoginForm.controls.email.value,
        password: this.LoginForm.controls.password.value,
      };
      this.apiServices.PostMethod('Users/Login', body).subscribe(
        (data) => {
          this.router.navigate(['/']);
          this.tosterService.success('Done login', 'Sucessfull operation');
        },
        (error) => {
          this.tosterService.error(
            'Login faild , please try again',
            'Wrong operation'
          );
        }
      );
    }
  }
}
