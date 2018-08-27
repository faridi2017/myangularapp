import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaleCountComponent } from './resale-count.component';

describe('ResaleCountComponent', () => {
  let component: ResaleCountComponent;
  let fixture: ComponentFixture<ResaleCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaleCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaleCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
