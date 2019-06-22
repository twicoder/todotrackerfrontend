import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLearningresourceComponent } from './update-learningresource.component';

describe('UpdateLearningresourceComponent', () => {
  let component: UpdateLearningresourceComponent;
  let fixture: ComponentFixture<UpdateLearningresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLearningresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLearningresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
