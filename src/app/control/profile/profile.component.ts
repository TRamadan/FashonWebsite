import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //here is the function needed to get all orders based on the loggined user
  GetOrders() {}

  //here is the function needed to show all profile data for the user
  ShowYourProfile() {}
}
