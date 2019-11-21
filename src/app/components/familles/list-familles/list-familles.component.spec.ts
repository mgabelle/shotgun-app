import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFamillesComponent } from './list-familles.component';

describe('ListFamillesComponent', () => {
  let component: ListFamillesComponent;
  let fixture: ComponentFixture<ListFamillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFamillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFamillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
