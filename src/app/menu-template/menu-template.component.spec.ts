import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTemplateComponent } from './menu-template.component';
import {DataFieldTemplateComponent} from "../data-field-template/data-field-template.component";

describe('MenuTemplateComponent', () => {
  let component: MenuTemplateComponent;
  let fixture: ComponentFixture<MenuTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTemplateComponent, DataFieldTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
