import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorV2Component } from './error-v2.component';

describe('ErrorV2Component', () => {
  let component: ErrorV2Component;
  let fixture: ComponentFixture<ErrorV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
