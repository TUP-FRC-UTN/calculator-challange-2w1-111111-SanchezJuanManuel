import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcButtonsComponent } from './calc-buttons.component';

describe('CalcButtonsComponent', () => {
  let component: CalcButtonsComponent;
  let fixture: ComponentFixture<CalcButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
