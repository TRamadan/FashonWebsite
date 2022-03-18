import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
  providers: [NgbAccordionConfig],
})
export class FaqsComponent implements OnInit {
  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {}
}
