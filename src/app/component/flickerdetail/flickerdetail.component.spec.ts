import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickerdetailComponent } from './flickerdetail.component';

describe('FlickerdetailComponent', () => {
  let component: FlickerdetailComponent;
  let fixture: ComponentFixture<FlickerdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickerdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
