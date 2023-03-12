import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinsteinQuotesComponent } from './einstein-quotes.component';

describe('EinsteinQuotesComponent', () => {
  let component: EinsteinQuotesComponent;
  let fixture: ComponentFixture<EinsteinQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinsteinQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinsteinQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
