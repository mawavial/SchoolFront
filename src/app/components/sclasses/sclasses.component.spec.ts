import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SclassesComponent } from './sclasses.component';

describe('SclassesComponent', () => {
  let component: SclassesComponent;
  let fixture: ComponentFixture<SclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
