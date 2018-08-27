import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateCountComponent } from './duplicate-count.component';

describe('DuplicateCountComponent', () => {
  let component: DuplicateCountComponent;
  let fixture: ComponentFixture<DuplicateCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
