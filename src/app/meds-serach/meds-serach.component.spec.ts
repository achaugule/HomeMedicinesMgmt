import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsSerachComponent } from './meds-serach.component';

describe('MedsSerachComponent', () => {
  let component: MedsSerachComponent;
  let fixture: ComponentFixture<MedsSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedsSerachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
