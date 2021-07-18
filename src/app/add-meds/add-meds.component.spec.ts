import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedsComponent } from './add-meds.component';

describe('AddMedsComponent', () => {
  let component: AddMedsComponent;
  let fixture: ComponentFixture<AddMedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
