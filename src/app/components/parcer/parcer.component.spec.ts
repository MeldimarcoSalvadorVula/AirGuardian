import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcerComponent } from './parcer.component';

describe('ParcerComponent', () => {
  let component: ParcerComponent;
  let fixture: ComponentFixture<ParcerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
