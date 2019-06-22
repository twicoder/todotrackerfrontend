import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListKnowledgeComponent} from './list-knowledge/list-knowledge.component';
import {AddKnowledgeComponent} from './add-knowledge/add-knowledge.component';
import {UpdateKnowledgeComponent} from './update-knowledge/update-knowledge.component';

const routes: Routes = [
  { path: '', component: ListKnowledgeComponent },
  { path: 'addknowledge', component: AddKnowledgeComponent },
  { path: 'updateknowledge', component: UpdateKnowledgeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class KnowledgeRouterModule {}
