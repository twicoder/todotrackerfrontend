import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKnowledgeComponent } from './list-knowledge.component';

describe('ListKnowledgeComponent', () => {
  let component: ListKnowledgeComponent;
  let fixture: ComponentFixture<ListKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
