/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstsectionComponent } from './firstsection.component';

describe('FirstsectionComponent', () => {
  let component: FirstsectionComponent;
  let fixture: ComponentFixture<FirstsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
