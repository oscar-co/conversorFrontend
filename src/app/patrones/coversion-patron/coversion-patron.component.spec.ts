import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversionPatronComponent } from './coversion-patron.component';

describe('CoversionPatronComponent', () => {
  let component: CoversionPatronComponent;
  let fixture: ComponentFixture<CoversionPatronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoversionPatronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoversionPatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
