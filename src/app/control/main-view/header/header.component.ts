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

  LogOut() {
    this.router.navigateByUrl('/auth/login');
  }
}
