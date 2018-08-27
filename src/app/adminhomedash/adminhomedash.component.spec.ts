import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomedashComponent } from './adminhomedash.component';

describe('AdminhomedashComponent', () => {
  let component: AdminhomedashComponent;
  let fixture: ComponentFixture<AdminhomedashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhomedashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhomedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
