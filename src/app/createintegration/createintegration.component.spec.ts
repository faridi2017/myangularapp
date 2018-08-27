import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateintegrationComponent } from './createintegration.component';

describe('CreateintegrationComponent', () => {
  let component: CreateintegrationComponent;
  let fixture: ComponentFixture<CreateintegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateintegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
