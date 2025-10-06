import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTodayComponent } from './information-today.component';

describe('InformationTodayComponent', () => {
  let component: InformationTodayComponent;
  let fixture: ComponentFixture<InformationTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationTodayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
