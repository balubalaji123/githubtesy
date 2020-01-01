import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseselectedComponent } from './courseselected.component';

describe('CourseselectedComponent', () => {
  let component: CourseselectedComponent;
  let fixture: ComponentFixture<CourseselectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseselectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseselectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
