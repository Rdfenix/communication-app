import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInternComponent } from './name-intern.component';

describe('NameInternComponent', () => {
  let component: NameInternComponent;
  let fixture: ComponentFixture<NameInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
