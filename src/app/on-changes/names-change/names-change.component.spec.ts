import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesChangeComponent } from './names-change.component';

describe('NamesChangeComponent', () => {
  let component: NamesChangeComponent;
  let fixture: ComponentFixture<NamesChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
