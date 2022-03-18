import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  SubscriptioForm?: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.SubscriptioForm = this.fb.group({
      email: [null, Validators.required],
    });
  }
}
