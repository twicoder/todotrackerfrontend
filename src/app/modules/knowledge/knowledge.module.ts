import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListKnowledgeComponent } from './list-knowledge/list-knowledge.component';
import { AddKnowledgeComponent } from './add-knowledge/add-knowledge.component';
import { UpdateKnowledgeComponent } from './update-knowledge/update-knowledge.component';
import { KnowledgeRouterModule } from './knowledge.router';

@NgModule({
  declarations: [ListKnowledgeComponent, AddKnowledgeComponent, UpdateKnowledgeComponent],
  imports: [
    CommonModule,
    KnowledgeRouterModule
  ]
})
export class KnowledgeModule { }
