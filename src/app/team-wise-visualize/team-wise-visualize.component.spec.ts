import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWiseVisualizeComponent } from './team-wise-visualize.component';

describe('TeamWiseVisualizeComponent', () => {
  let component: TeamWiseVisualizeComponent;
  let fixture: ComponentFixture<TeamWiseVisualizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamWiseVisualizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWiseVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
