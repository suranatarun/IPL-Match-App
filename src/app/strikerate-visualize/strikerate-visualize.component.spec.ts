import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikerateVisualizeComponent } from './strikerate-visualize.component';

describe('StrikerateVisualizeComponent', () => {
  let component: StrikerateVisualizeComponent;
  let fixture: ComponentFixture<StrikerateVisualizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrikerateVisualizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrikerateVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
