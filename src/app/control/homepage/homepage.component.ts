import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  ShowDetails() {
    this.router.navigateByUrl('/product_details');
  }

  ShowAllProducts() {
    this.router.navigateByUrl('/products');
  }

  MakeCustomeShirt() {
    this.router.navigateByUrl('/customShirt');
  }

  GotoCustomisation() {
    window.open(
      'https://www.tailorstore.com.au/tshirt-designer#36wLDgiOT0|1uFFe8PmdCFRUqc9emcd',
      '_blank'
    );
  }
}
