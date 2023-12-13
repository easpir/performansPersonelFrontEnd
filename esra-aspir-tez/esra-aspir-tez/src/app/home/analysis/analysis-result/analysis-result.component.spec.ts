import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisResultComponent } from './analysis-result.component';

describe('AnalysisResultComponent', () => {
  let component: AnalysisResultComponent;
  let fixture: ComponentFixture<AnalysisResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalysisResultComponent]
    });
    fixture = TestBed.createComponent(AnalysisResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
