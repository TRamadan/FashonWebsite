import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   let element = document.querySelector('.navbar') as HTMLElement;
  //   if (window.pageYOffset > 200) {
  //     element.classList.add('fixed-top');
  //   } else {
  //     element.classList.remove('fixed-top');
  //   }
  // }

  //here is the function needed to exit from the application
  LogOut() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }

  //here is the function needed to view all needed items for the cart
  GotoCart() {
    this.router.navigateByUrl('/cart');
  }
}
