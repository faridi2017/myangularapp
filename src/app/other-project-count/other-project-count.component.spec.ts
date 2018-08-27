import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProjectCountComponent } from './other-project-count.component';

describe('OtherProjectCountComponent', () => {
  let component: OtherProjectCountComponent;
  let fixture: ComponentFixture<OtherProjectCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProjectCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProjectCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
