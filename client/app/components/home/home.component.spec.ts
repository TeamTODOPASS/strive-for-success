import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';

describe('Home', () => {
   let component: HomeComponent;
   let fixture: ComponentFixture<HomeComponent>;
 
   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [ HomeComponent ]
     })
     .compileComponents();
   }));
 
   beforeEach(() => {
     fixture = TestBed.createComponent(HomeComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });
 
   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });
