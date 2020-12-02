import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikerateComponent } from './strikerate.component';

describe('StrikerateComponent', () => {
  let component: StrikerateComponent;
  let fixture: ComponentFixture<StrikerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrikerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrikerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
