import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiresthomeComponent } from './firesthome.component';

describe('FiresthomeComponent', () => {
  let component: FiresthomeComponent;
  let fixture: ComponentFixture<FiresthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiresthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiresthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
