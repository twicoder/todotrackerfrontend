import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLearningresourceComponent } from './list-learningresource/list-learningresource.component';
import { AddLearningresourceComponent } from './add-learningresource/add-learningresource.component';
import { UpdateLearningresourceComponent } from './update-learningresource/update-learningresource.component';
import {LearningresourceRouter} from './learningresource.router';

@NgModule({
  declarations: [ListLearningresourceComponent, AddLearningresourceComponent, UpdateLearningresourceComponent],
  imports: [
    CommonModule,
    LearningresourceRouter
  ]
})
export class LearningresourceModule { }
