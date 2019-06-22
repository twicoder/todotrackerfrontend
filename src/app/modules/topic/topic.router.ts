import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListTopicComponent} from './list-topic/list-topic.component';
import {AddTopicComponent} from './add-topic/add-topic.component';
import {UpdateTopicComponent} from './update-topic/update-topic.component';

const routes: Routes = [
  { path: '', component: ListTopicComponent },
  { path: 'addtopic', component: AddTopicComponent },
  { path: 'updatetopic', component: UpdateTopicComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TopicRouterModule {}
