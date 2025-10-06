import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisionsComponent } from './previsions.component';

describe('PrevisionsComponent', () => {
  let component: PrevisionsComponent;
  let fixture: ComponentFixture<PrevisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevisionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
