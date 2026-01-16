import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressControl } from './progress-control';

describe('ProgressControl', () => {
  let component: ProgressControl;
  let fixture: ComponentFixture<ProgressControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
