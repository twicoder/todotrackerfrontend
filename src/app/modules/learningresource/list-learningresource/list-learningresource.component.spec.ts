import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLearningresourceComponent } from './list-learningresource.component';

describe('ListLearningresourceComponent', () => {
  let component: ListLearningresourceComponent;
  let fixture: ComponentFixture<ListLearningresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLearningresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLearningresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
