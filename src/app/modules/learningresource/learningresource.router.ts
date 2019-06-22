import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListLearningresourceComponent} from './list-learningresource/list-learningresource.component';
import {AddLearningresourceComponent} from './add-learningresource/add-learningresource.component';
import {UpdateLearningresourceComponent} from './update-learningresource/update-learningresource.component';

const routes: Routes = [
  { path: '', component: ListLearningresourceComponent },
  { path: 'addlearningresource', component: AddLearningresourceComponent },
  { path: 'updatelearningresource', component: UpdateLearningresourceComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LearningresourceRouter {}
