/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurproductsComponent } from './ourproducts.component';

describe('OurproductsComponent', () => {
  let component: OurproductsComponent;
  let fixture: ComponentFixture<OurproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
