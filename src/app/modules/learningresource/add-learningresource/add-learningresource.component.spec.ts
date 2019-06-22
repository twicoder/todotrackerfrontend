import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLearningresourceComponent } from './add-learningresource.component';

describe('AddLearningresourceComponent', () => {
  let component: AddLearningresourceComponent;
  let fixture: ComponentFixture<AddLearningresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLearningresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLearningresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
