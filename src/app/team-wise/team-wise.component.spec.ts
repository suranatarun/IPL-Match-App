import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWiseComponent } from './team-wise.component';

describe('TeamWiseComponent', () => {
  let component: TeamWiseComponent;
  let fixture: ComponentFixture<TeamWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
